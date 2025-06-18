
import { Aluno } from '../types/Aluno';

// Dados mockados
let alunos: Aluno[] = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    matricula: '20240001',
    dataNascimento: new Date('2000-01-15'),
    ativo: true,
    cpf: '12345678901'
  },
  {
    id: 2,
    nome: 'Maria Santos',
    email: 'maria.santos@email.com',
    matricula: '20240002',
    dataNascimento: new Date('1999-05-20'),
    ativo: true,
    cpf: '98765432100'
  },
  {
    id: 3,
    nome: 'Pedro Inativo',
    email: 'pedro@email.com',
    matricula: '20240003',
    dataNascimento: new Date('1998-10-10'),
    ativo: false,
    cpf: '11122233344'
  }
];

let nextId = 4;

export class AlunoService {
  static getAll(): Aluno[] {
    return alunos;
  }

  static getAtivos(): Aluno[] {
    return alunos.filter(aluno => aluno.ativo);
  }

  static getInativos(): Aluno[] {
    return alunos.filter(aluno => !aluno.ativo);
  }

  static getById(id: number): Aluno | undefined {
    return alunos.find(aluno => aluno.id === id);
  }

  static create(aluno: Omit<Aluno, 'id'>): Aluno {
    const novoAluno: Aluno = {
      ...aluno,
      id: nextId++
    };
    alunos.push(novoAluno);
    return novoAluno;
  }

  static update(id: number, alunoAtualizado: Omit<Aluno, 'id'>): Aluno | null {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
      alunos[index] = { ...alunoAtualizado, id };
      return alunos[index];
    }
    return null;
  }

  static delete(id: number): boolean {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
      alunos[index].ativo = false;
      return true;
    }
    return false;
  }

  static reativar(id: number): boolean {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
      alunos[index].ativo = true;
      return true;
    }
    return false;
  }
}
