import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
// import Example from '../database/models/ExampleModel';
import Users from '../database/models/Users';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const mockAdmin = {
  id: 1,
  username: "Admin",
  role: "admin",
  email: "admin@admin.com",
  password: "secret_admin"
}

const mockUser = {
  id: 2,
  username: "User",
  role: "user",
  email: "teste@test.com",
}

const mockLogin = {
  email: "admin@admin.com",
  password: "secret_admin"
}

const mockInvalidLogin = {
  email: 'user@user.com',
  password: 'wrongpassword'
}

describe('Verifica a rota de login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;
  let chaiHttpResponse: Response;
  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });
  describe('Faz login com usuário e senha válidos', async () => {
    before(async () => {
      sinon
        .stub(Users, "findOne")
        .resolves(mockAdmin as Users);
    });
    after(() => {
      (Users.findOne as sinon.SinonStub).restore();
    })

  }) 

  it('Verifica se a rota existe', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(mockLogin);
    expect(chaiHttpResponse).not.to.have.status(404);
  });

  it('Chama o método status e verifica se possui o código 200', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(mockLogin);
    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('Verifica se recebe a resposta do usuário com token', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(mockLogin);
    expect(chaiHttpResponse.body).to.have.own.property('user');
    expect(chaiHttpResponse.body).to.have.own.property('token');
    expect(chaiHttpResponse.body.user).to.be.an('object').deep.equal(mockUser);
  });

  it('Caso alguma informação de login esteja incorreta, verifica se possui o status com código 401', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(mockInvalidLogin);
    expect(chaiHttpResponse.status).to.be.equal(401);
  });

  it('Verifica se recebe mensagem de erro ao não conseguir realizar login', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(mockInvalidLogin);
    expect(chaiHttpResponse.body.message).to.equal('Incorrect email or password');
  });
});
