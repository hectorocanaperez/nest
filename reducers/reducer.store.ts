import { BadRequestException, Injectable } from '@nestjs/common';
import { Reducer } from './reducer.type';
import * as StepChanged from './step.changed.reducer';
import * as StatusChanged from './status.changed.reducer';


@Injectable()
export class ReducerStore {
  private readonly cache = new Map<string, Reducer>();

  constructor() {
   
    this.cache.set(StepChanged.EVENT_TYPE, StepChanged.reducer);
    this.cache.set(StatusChanged.EVENT_TYPE, StatusChanged.reducer);

  }

  getReducer(eventType: string) {
    return this.cache.get(eventType) || (() => {
        throw new BadRequestException(`ERROR NOT FOUND [${eventType}] REDUX FUNCTION`)
    })
  }
}


