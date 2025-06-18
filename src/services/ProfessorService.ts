
import { Professor } from '../types/Professor';

// Dados mockados
let professores: Professor[] = [
  {
    id: 1,
    nome: 'Dr. Carlos Oliveira',
    matricula: 'PROF001',
    ativo: true,
    cpf: '55566677788'
  },
  {
    id: 2,
    nome: 'Dra. Ana Costa',
    matricula: 'PROF002',
    ativo: true,
    cpf: '99988877766'
  },
  {
    id: 3,
    nome: 'Prof. Roberto Inativo',
    matricula: 'PROF003',
    ativo: false,
    cpf: '44455566677'
  }
];

let nextId = 4;

export class ProfessorService {
  static getAll(): Professor[] {
    return professores;
  }

  static getAtivos(): Professor[] {
    return professores.filter(professor => professor.ativo);
  }

  static getInativos(): Professor[] {
    return professores.filter(professor => !professor.ativo);
  }

  static getById(id: number): Professor | undefined {
    return professores.find(professor => professor.id === id);
  }

  static create(professor: Omit<Professor, 'id'>): Professor {
    const novoProfessor: Professor = {
      ...professor,
      id: nextId++
    };
    professores.push(novoProfessor);
    return novoProfessor;
  }

  static update(id: number, professorAtualizado: Omit<Professor, 'id'>): Professor | null {
    const index = professores.findIndex(professor => professor.id === id);
    if (index !== -1) {
      professores[index] = { ...professorAtualizado, id };
      return professores[index];
    }
    return null;
  }

  static delete(id: number): boolean {
    const index = professores.findIndex(professor => professor.id === id);
    if (index !== -1) {
      professores[index].ativo = false;
      return true;
    }
    return false;
  }

  static reativar(id: number): boolean {
    const index = professores.findIndex(professor => professor.id === id);
    if (index !== -1) {
      professores[index].ativo = true;
      return true;
    }
    return false;
  }
}
