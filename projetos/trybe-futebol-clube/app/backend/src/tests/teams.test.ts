import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
// import Example from '../database/models/ExampleModel';
import Teams from '../database/models/Teams';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const mockTeams = [
  { id: 1, teamName: 'Avaí/Kindermann' },
  { id: 2, teamName: 'Bahia' },
  { id: 3, teamName: 'Botafogo' },
];

const mockTeam = { id: 5, teamName: 'Cruzeiro' };

describe('Verifica a rota de teams', () => {

  let chaiHttpResponse: Response; 

  describe('Verifica se é possível listar os times', () => {
    before(async () => {
      sinon
        .stub(Teams, 'findAll')
        .resolves(mockTeams as Teams[]);
      sinon.
        stub(Teams, 'findByPk')
        .resolves(mockTeam as Teams);
    });

    after(() => {
      (Teams.findAll as sinon.SinonStub).restore();
      (Teams.findByPk as sinon.SinonStub).restore();
    });

    it('Verifica se a rota existe', async () => {
      chaiHttpResponse = await chai.request(app).get('/teams');
      expect(chaiHttpResponse).not.to.have.status(404);
    });

    it('Verifica se a resposta tem o id e nome dos times',
    async () => {
      chaiHttpResponse = await chai.request(app).get('/teams');
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.an('array');
      expect(chaiHttpResponse.body).to.have.length(3);
      chaiHttpResponse.body.forEach((team: Teams) => {
        expect(team).to.have.property('id');
        expect(team.id).to.be.a('number');
        expect(team).to.have.property('teamName');
        expect(team.teamName).to.be.a('string');
      });
    });

    it('Verifica se é possível filtrar um time específico',
    async() => {
      chaiHttpResponse = await chai.request(app).get('/teams/5');
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.an('object');
      expect(chaiHttpResponse.body).to.have.property('id');
      expect(chaiHttpResponse.body.id).to.be.a('number');
      expect(chaiHttpResponse.body).to.have.property('teamName');
      expect(chaiHttpResponse.body.teamName).to.be.a('string');
    });
  });

  describe('Chama o método status e verifica se possui o código 404', () => {
    before(() => {
      sinon
        .stub(Teams, 'findByPk')
        .resolves(null)
    });
    after(() => {
      (Teams.findByPk as sinon.SinonStub).restore()
    });

    it('Verifica se não encontra o time caso o id não exista', async() => {
      chaiHttpResponse = await chai.request(app).get('/teams/5');
      expect(chaiHttpResponse).to.have.status(404);
      expect(chaiHttpResponse.body).to.be.an('object');
      expect(chaiHttpResponse.body).to.have.property('message');
      expect(chaiHttpResponse.body.message).to.be.equal('Time não encontrado');
    });
  });
});
