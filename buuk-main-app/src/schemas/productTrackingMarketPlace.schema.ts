import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productTrackingMarketPlaceDcoument = productTrackingMarketPlace & Document;

@Schema()
export class productTrackingMarketPlace {
  @Prop()
  data: string;

  @Prop()
  errors: Error[];
  
  @Prop()
  startedAt ?: Date;

  @Prop()
  finishedAt ?: Date;

}

export const productTrackingMarket = SchemaFactory.createForClass();