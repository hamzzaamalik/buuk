import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { productTrackingMarketPlace } from './productTrackingMarketPlace.schema';

export type productTrackingDocument = productTracking & Document;

@Schema()
export class productTracking {
  @Prop()
  productId: string;

  @Prop()
  isbn: number;

  @Prop()
  marketplaces: Record<string, productTrackingMarketPlace>;

  @Prop()
  serviceStartedAt ?: String;

  @Prop()
  workerStartedAt ?: String;

  @Prop()
  workerFinishedAt ?: String;

  @Prop()
  serviceFinishedAt ?: String;

}

export const productTrackingDocument = SchemaFactory.createForClass();