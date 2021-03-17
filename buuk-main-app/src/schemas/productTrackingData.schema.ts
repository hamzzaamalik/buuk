import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { productTrackingDataRating } from './productTrackingDataRating.schema';
import { productTrackingDataCategoryDocument } from './productTrackingDataCategory.schema';

export type productTrackingDataDocument = productTrackingData & Document;

@Schema()
export class productTrackingData {
  @Prop()
  ranking? : number;

  @Prop()
  ratings?: productTrackingDataRating;

  @Prop()
  categories: productTrackingDataCategoryDocument[];

  @Prop()
  recommended ?: Boolean;

  @Prop()
  available ?: Boolean;

}

export const productTrackingDataDocument = SchemaFactory.createForClass();