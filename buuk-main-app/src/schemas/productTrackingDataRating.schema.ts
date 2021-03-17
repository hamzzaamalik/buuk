import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productTrackingDataRatingDocument = productTrackingDataRating & Document;

@Schema()
export class productTrackingDataRating {
  @Prop()
  average: number;

  @Prop()
  count?: number;

  @Prop()
  stars?: [number, number, number, number, number];

  @Prop()
  verified? : number;

}

export const productTrackingRating = SchemaFactory.createForClass();