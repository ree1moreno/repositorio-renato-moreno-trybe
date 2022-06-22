import { expect } from 'chai';
import mongoose from 'mongoose';
import * as sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { carMock, carListMock } from '../../mocks/carMocks';

const carModel = new CarModel();

describe('Testa camada de model', () => {
  describe('Verifica a camada de model dos carros', () => {
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
      const result = await carModel.create(carMock);
      expect(result).to.be.an('object');
      expect(result).to.be.equal(carMock);
    });

    it('Verifica se é possível retornar a lista de carros', async () => {
      const result = await carModel.read();
      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(carListMock);
    });

    it('Verifica se é possível retornar um carro pelo id', async () => {
      const result = await carModel.readOne(carListMock[0]._id);
      expect(result).to.be.an('object');
      expect(result).to.be.deep.equal(carListMock[0]);
    });

    it('Verifica se é possível atualizar um carro pelo id', async () => {
      const result = await carModel.update(carListMock[0]._id, carMock);
      expect(result).to.be.an('object');
      expect(result).to.be.deep.equal(carListMock[0]);
    });

    it('Verifica se é possível deletar um carro pelo id', async () => {
      const result = await carModel.delete(carListMock[0]._id);
      expect(result).to.be.an('object');
      expect(result).to.be.deep.equal(carListMock[0]);
    });
  });
});