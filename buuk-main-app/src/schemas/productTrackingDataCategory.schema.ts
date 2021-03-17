import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productTrackingDataCategoryDocument = productTrackingDataCategory & Document;

@Schema()
export class productTrackingDataCategory {
  @Prop()
  name : number;

  @Prop()
  ratings?: number;
  
}

export const productTrackingDataCategoryDocument = SchemaFactory.createForClass();