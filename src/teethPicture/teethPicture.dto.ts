export class CreateTeethPictureDto {
    UserID: number;
    UploadDate: Date;
    FilePath: string;
    Status: 'Uploaded' | 'Deleted';
  }
  