import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Valid email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}

