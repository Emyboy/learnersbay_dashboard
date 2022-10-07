export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    avatar_url: string;
    confirmed: boolean;
    account_type: 'student' | 'instructor';
}

export enum UserAccountType {
    instructor,
    student
}
