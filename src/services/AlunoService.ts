
import { Aluno } from '../types/Aluno';

export class AlunoService {
  private static baseUrl = '/api/alunos';

  static async getAll(): Promise<Aluno[]> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) throw new Error('Erro ao buscar alunos');
    return response.json();
  }

  static async getAtivos(): Promise<Aluno[]> {
    const response = await fetch(`${this.baseUrl}/ativos`);
    if (!response.ok) throw new Error('Erro ao buscar alunos ativos');
    return response.json();
  }

  static async getInativos(): Promise<Aluno[]> {
    const response = await fetch(`${this.baseUrl}/inativos`);
    if (!response.ok) throw new Error('Erro ao buscar alunos inativos');
    return response.json();
  }

  static async getById(id: number): Promise<Aluno> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar aluno');
    return response.json();
  }

  static async create(aluno: Omit<Aluno, 'id'>): Promise<Aluno> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(aluno),
    });
    if (!response.ok) throw new Error('Erro ao criar aluno');
    return response.json();
  }

  static async update(id: number, aluno: Omit<Aluno, 'id'>): Promise<Aluno> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(aluno),
    });
    if (!response.ok) throw new Error('Erro ao atualizar aluno');
    return response.json();
  }

  static async delete(id: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao deletar aluno');
  }

  static async reativar(id: number): Promise<Aluno> {
    const response = await fetch(`${this.baseUrl}/${id}/reativar`, {
      method: 'PUT',
    });
    if (!response.ok) throw new Error('Erro ao reativar aluno');
    return response.json();
  }
}
