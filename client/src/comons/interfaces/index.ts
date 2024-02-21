//Interface para usuário
export interface IUser {
    idMember: number;
    name: string;
    password: string; 
    phone: string; 
    email: string; 
    address: string; 
    addressNumber: string;  
    neighborhood: string;  
    city: string; 
    zipcode: string; 
    rg: string; 
    cpf: string; 
    dateOfBaptism: string;  
    dateOfBirth: string; 
    job: string; 
    maritalStatus: string;  
    levelAccess: number;  
};

// Interface para livro
export interface IBook {
    idBook: number;
    title: string;
    author: string;
    genre: string;
    quantity: number;
    owner: string;
    pending: number;
}

// Interface para empréstimo
export interface ILoan {
    idLoan: number;
    loanDate: string; 
    returnDate: string; 
    pending: number;
    idMember: number;
    idBook: number;
}

// Interface para membro
export interface IMember {
    idMember: number;
    name: string;
    password: string;
    phone: string;
    email?: string | null;
    address?: string | null;
    addressNumber?: string | null;
    neighborhood?: string | null;
    city?: string | null;
    zipcode?: string | null;
    rg?: string | null;
    cpf?: string | null;
    dateOfBaptism?: string | null;
    dateOfBirth?: string | null;
    job?: string | null;
    maritalStatus?: string | null;
    levelAccess?: number | null;
    archived?: number | null;
    spouseName?: string
}
