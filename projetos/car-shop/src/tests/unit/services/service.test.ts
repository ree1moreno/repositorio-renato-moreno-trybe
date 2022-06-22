import { expect } from 'chai';
import mongoose from 'mongoose';
import * as sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock, invalidCarMock , carListMock } from '../../mocks/carMocks';

const carModel = new CarModel();
const carService = new CarService(carModel);

describe('Testa camada de service', () => {
  describe('Verifica a camada de service dos carros', () => {
    before (() => {
      sinon.stub(mongoose.Model, 'create').resolves(carMock);
      sinon.stub(mongoose.Model, 'find').resolves(carListMock);
      sinon.stub(mongoose.Model, 'findById').resolves(carListMock[0]);
      sinon.stub(mongoose.Model, 'findByIdAndUpdate').resolves(carListMock[0]);
      sinon.stub(mongoose.Model, 'findByIdAndDelete').resolves(carListMock[0]);        
    });

    after (() => {
      (mongoose.Model.create as sinon.SinonStub).restore();
      (mongoose.Model.find as sinon.SinonStub).restore();
      (mongoose.Model.findById as sinon.SinonStub).restore();
      (mongoose.Model.findByIdAndUpdate as sinon.SinonStub).restore();
      (mongoose.Model.findByIdAndDelete as sinon.SinonStub).restore();
    });

    it('Verifica se é possível criar um novo carro', async () => {
      const result = await carService.create(carMock);
      expect(result).to.be.an('object');
      expect(result).to.be.equal(carMock);
    });

    it('Verifica se é possível criar um novo carro com informações incorretas', async () => {
      const result = await carService.create(invalidCarMock);
      expect(result).to.be.an('object');
      expect(result).to.be.property('error');
    });

    it('Verifica se é possível retornar a lista de carros', async () => {
      const result = await carService.read();
      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(carListMock);
    });

    it('Verifica se é possível retornar um carro pelo id', async () => {
      const result = await carService.readOne(carListMock[0]._id);
      expect(result).to.be.an('object');
      expect(result).to.be.deep.equal(carListMock[0]);
    });

    it('Verifica se é possível atualizar um carro pelo id', async () => {
      const result = await carService.update(carListMock[0]._id, carMock);
      expect(result).to.be.an('object');
      expect(result).to.be.deep.equal(carListMock[0]);
    });

    it('Verifica se é possível atualizar um carro com informações incorretas', async () => {
      const result = await carService.update(carListMock[0]._id, invalidCarMock);
      expect(result).to.be.an('object');
      expect(result).to.be.property('error');
    });

    it('Verifica se é possível deletar um carro pelo id', async () => {
      const result = await carService.delete(carListMock[0]._id);
      expect(result).to.be.an('object');
      expect(result).to.be.deep.equal(carListMock[0]);
    });
  });
});


