export interface Todo
{
     description: string;
     id: string; 
     createdDate: Date;
     isCompleted: boolean;
     completedDate?: Date; 
     isDeleted: boolean;
     deletedDate?: Date; 
};

