import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class VerifyMemberDto {
  @ApiProperty({ 
    description: 'Official NYSC Call-up number',
    example: 'NYSC/ABC/2024/123456' 
  })
  @IsNotEmpty()
  @IsString()
  callUpNumber: string;

  @ApiProperty({ 
    description: 'Assigned State Code',
    example: 'LA/24A/1234' 
  })
  @IsNotEmpty()
  @IsString()
  stateCode: string;
}
