import { welcome } from "./welcome";

describe('Alerta mostrando uma mensagem de boas vindas', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert
  it('Deve exibir um alert com boas vindas', () => {
    welcome('Usuário')
    expect(mockAlert).toHaveBeenCalledWith('Seja bem-vindo Usuário')
  })
})