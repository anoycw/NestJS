import { Injectable } from '@nestjs/common';

@Injectable()
export class PracticeModuleService {
  getAllData(): any {
    return {
      data: [
        {
          name: 'Anoy Chowdhury',
          age: 27,
          hobby: 'Watching Movies',
        },
        {
          name: 'Anoy Chowdhury',
          age: 27,
          hobby: 'Watching Movies',
        },
      ],
    };
  }

  saveAllData(): any {
    console.log('requestBodyName', this.getAllData());
  }
}
