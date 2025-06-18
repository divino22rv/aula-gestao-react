
import { Professor } from '../types/Professor';

export class ProfessorService {
  private static baseUrl = '/api/professores';

  static async getAll(): Promise<Professor[]> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) throw new Error('Erro ao buscar professores');
    return response.json();
  }

  static async getAtivos(): Promise<Professor[]> {
    const response = await fetch(`${this.baseUrl}/ativos`);
    if (!response.ok) throw new Error('Erro ao buscar professores ativos');
    return response.json();
  }

  static async getInativos(): Promise<Professor[]> {
    const response = await fetch(`${this.baseUrl}/inativos`);
    if (!response.ok) throw new Error('Erro ao buscar professores inativos');
    return response.json();
  }

  static async getById(id: number): Promise<Professor> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar professor');
    return response.json();
  }

  static async create(professor: Omit<Professor, 'id'>): Promise<Professor> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(professor),
    });
    if (!response.ok) throw new Error('Erro ao criar professor');
    return response.json();
  }

  static async update(id: number, professor: Omit<Professor, 'id'>): Promise<Professor> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(professor),
    });
    if (!response.ok) throw new Error('Erro ao atualizar professor');
    return response.json();
  }

  static async delete(id: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao deletar professor');
  }

  static async reativar(id: number): Promise<Professor> {
    const response = await fetch(`${this.baseUrl}/${id}/reativar`, {
      method: 'PUT',
    });
    if (!response.ok) throw new Error('Erro ao reativar professor');
    return response.json();
  }
}
