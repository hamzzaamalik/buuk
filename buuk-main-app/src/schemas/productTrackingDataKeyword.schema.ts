import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productTrackingDataKeywordDocument = productTrackingDataKeyword & Document;

@Schema()
export class productTrackingDataKeyword {
  @Prop()
  keyword : string;

  @Prop()
  rating : number;

}

export const productTrackingDataKeywordDocument = SchemaFactory.createForClass();