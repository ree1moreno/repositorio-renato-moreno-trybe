import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import MotorcycleService from '../services/MotorcycleService';
import { Motorcycle } from '../interfaces/MotorcycleInterface';

class MotorcycleController extends Controller<Motorcycle> {
  private _route: string;

  constructor(
    service = new MotorcycleService(),
    route = '/motorcycles',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Motorcycle>,
    res: Response<Motorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const response = await this.service.create(body);
      if (!response) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in response) {
        return res.status(400).json(response);
      }
      return res.status(201).json(response);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<Motorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    if (id.length < 24) {
      return res.status(400).json({ error: this.errors.invalid });
    }
    try {
      const response = await this.service.readOne(id);
      return response
        ? res.json(response)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (
    req: Request<{ id: string; }>,
    res: Response<Motorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    if (id.length < 24) {
      return res.status(400).json({ error: this.errors.invalid });
    }    
    if (!id) return res.status(400).json({ error: this.errors.badRequest });

    const { body } = req;
    
    const updated = await this.service.update(id, body);
    if (!updated) return res.status(404).json({ error: this.errors.notFound });

    if ('error' in updated) {
      return res.status(400).json({ error: this.errors.badRequest });
    }

    return res.status(200).json(updated);
  };   

  delete = async (
    req: Request<{ id: string; }>,
    res: Response<Motorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    if (id.length < 24) {
      return res.status(400).json({ error: this.errors.invalid });
    }    
    if (!id) return res.status(400).json({ error: this.errors.badRequest });
    
    try {
      const response = await this.service.delete(id);
      if (!response) {
        return res.status(404).json({ error: this.errors.notFound });
      }
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  }; 
}

export default MotorcycleController;
