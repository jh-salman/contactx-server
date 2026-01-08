import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model cardScan
 *
 */
export type cardScanModel = runtime.Types.Result.DefaultSelection<Prisma.$cardScanPayload>;
export type AggregateCardScan = {
    _count: CardScanCountAggregateOutputType | null;
    _avg: CardScanAvgAggregateOutputType | null;
    _sum: CardScanSumAggregateOutputType | null;
    _min: CardScanMinAggregateOutputType | null;
    _max: CardScanMaxAggregateOutputType | null;
};
export type CardScanAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type CardScanSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type CardScanMinAggregateOutputType = {
    id: string | null;
    cardId: string | null;
    ip: string | null;
    userAgent: string | null;
    source: string | null;
    latitude: number | null;
    longitude: number | null;
    city: string | null;
    country: string | null;
    createdAt: Date | null;
};
export type CardScanMaxAggregateOutputType = {
    id: string | null;
    cardId: string | null;
    ip: string | null;
    userAgent: string | null;
    source: string | null;
    latitude: number | null;
    longitude: number | null;
    city: string | null;
    country: string | null;
    createdAt: Date | null;
};
export type CardScanCountAggregateOutputType = {
    id: number;
    cardId: number;
    ip: number;
    userAgent: number;
    source: number;
    latitude: number;
    longitude: number;
    city: number;
    country: number;
    createdAt: number;
    _all: number;
};
export type CardScanAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type CardScanSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type CardScanMinAggregateInputType = {
    id?: true;
    cardId?: true;
    ip?: true;
    userAgent?: true;
    source?: true;
    latitude?: true;
    longitude?: true;
    city?: true;
    country?: true;
    createdAt?: true;
};
export type CardScanMaxAggregateInputType = {
    id?: true;
    cardId?: true;
    ip?: true;
    userAgent?: true;
    source?: true;
    latitude?: true;
    longitude?: true;
    city?: true;
    country?: true;
    createdAt?: true;
};
export type CardScanCountAggregateInputType = {
    id?: true;
    cardId?: true;
    ip?: true;
    userAgent?: true;
    source?: true;
    latitude?: true;
    longitude?: true;
    city?: true;
    country?: true;
    createdAt?: true;
    _all?: true;
};
export type CardScanAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cardScan to aggregate.
     */
    where?: Prisma.cardScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cardScans to fetch.
     */
    orderBy?: Prisma.cardScanOrderByWithRelationInput | Prisma.cardScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.cardScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cardScans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cardScans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cardScans
    **/
    _count?: true | CardScanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CardScanAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CardScanSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CardScanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CardScanMaxAggregateInputType;
};
export type GetCardScanAggregateType<T extends CardScanAggregateArgs> = {
    [P in keyof T & keyof AggregateCardScan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCardScan[P]> : Prisma.GetScalarType<T[P], AggregateCardScan[P]>;
};
export type cardScanGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cardScanWhereInput;
    orderBy?: Prisma.cardScanOrderByWithAggregationInput | Prisma.cardScanOrderByWithAggregationInput[];
    by: Prisma.CardScanScalarFieldEnum[] | Prisma.CardScanScalarFieldEnum;
    having?: Prisma.cardScanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CardScanCountAggregateInputType | true;
    _avg?: CardScanAvgAggregateInputType;
    _sum?: CardScanSumAggregateInputType;
    _min?: CardScanMinAggregateInputType;
    _max?: CardScanMaxAggregateInputType;
};
export type CardScanGroupByOutputType = {
    id: string;
    cardId: string;
    ip: string | null;
    userAgent: string | null;
    source: string;
    latitude: number | null;
    longitude: number | null;
    city: string | null;
    country: string | null;
    createdAt: Date;
    _count: CardScanCountAggregateOutputType | null;
    _avg: CardScanAvgAggregateOutputType | null;
    _sum: CardScanSumAggregateOutputType | null;
    _min: CardScanMinAggregateOutputType | null;
    _max: CardScanMaxAggregateOutputType | null;
};
type GetCardScanGroupByPayload<T extends cardScanGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CardScanGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CardScanGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CardScanGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CardScanGroupByOutputType[P]>;
}>>;
export type cardScanWhereInput = {
    AND?: Prisma.cardScanWhereInput | Prisma.cardScanWhereInput[];
    OR?: Prisma.cardScanWhereInput[];
    NOT?: Prisma.cardScanWhereInput | Prisma.cardScanWhereInput[];
    id?: Prisma.StringFilter<"cardScan"> | string;
    cardId?: Prisma.StringFilter<"cardScan"> | string;
    ip?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    source?: Prisma.StringFilter<"cardScan"> | string;
    latitude?: Prisma.FloatNullableFilter<"cardScan"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"cardScan"> | number | null;
    city?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    country?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cardScan"> | Date | string;
    card?: Prisma.XOR<Prisma.CardScalarRelationFilter, Prisma.CardWhereInput>;
};
export type cardScanOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    ip?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    card?: Prisma.CardOrderByWithRelationInput;
};
export type cardScanWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.cardScanWhereInput | Prisma.cardScanWhereInput[];
    OR?: Prisma.cardScanWhereInput[];
    NOT?: Prisma.cardScanWhereInput | Prisma.cardScanWhereInput[];
    cardId?: Prisma.StringFilter<"cardScan"> | string;
    ip?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    source?: Prisma.StringFilter<"cardScan"> | string;
    latitude?: Prisma.FloatNullableFilter<"cardScan"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"cardScan"> | number | null;
    city?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    country?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cardScan"> | Date | string;
    card?: Prisma.XOR<Prisma.CardScalarRelationFilter, Prisma.CardWhereInput>;
}, "id">;
export type cardScanOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    ip?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.cardScanCountOrderByAggregateInput;
    _avg?: Prisma.cardScanAvgOrderByAggregateInput;
    _max?: Prisma.cardScanMaxOrderByAggregateInput;
    _min?: Prisma.cardScanMinOrderByAggregateInput;
    _sum?: Prisma.cardScanSumOrderByAggregateInput;
};
export type cardScanScalarWhereWithAggregatesInput = {
    AND?: Prisma.cardScanScalarWhereWithAggregatesInput | Prisma.cardScanScalarWhereWithAggregatesInput[];
    OR?: Prisma.cardScanScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cardScanScalarWhereWithAggregatesInput | Prisma.cardScanScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"cardScan"> | string;
    cardId?: Prisma.StringWithAggregatesFilter<"cardScan"> | string;
    ip?: Prisma.StringNullableWithAggregatesFilter<"cardScan"> | string | null;
    userAgent?: Prisma.StringNullableWithAggregatesFilter<"cardScan"> | string | null;
    source?: Prisma.StringWithAggregatesFilter<"cardScan"> | string;
    latitude?: Prisma.FloatNullableWithAggregatesFilter<"cardScan"> | number | null;
    longitude?: Prisma.FloatNullableWithAggregatesFilter<"cardScan"> | number | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"cardScan"> | string | null;
    country?: Prisma.StringNullableWithAggregatesFilter<"cardScan"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"cardScan"> | Date | string;
};
export type cardScanCreateInput = {
    id?: string;
    ip?: string | null;
    userAgent?: string | null;
    source?: string;
    latitude?: number | null;
    longitude?: number | null;
    city?: string | null;
    country?: string | null;
    createdAt?: Date | string;
    card: Prisma.CardCreateNestedOneWithoutScanInput;
};
export type cardScanUncheckedCreateInput = {
    id?: string;
    cardId: string;
    ip?: string | null;
    userAgent?: string | null;
    source?: string;
    latitude?: number | null;
    longitude?: number | null;
    city?: string | null;
    country?: string | null;
    createdAt?: Date | string;
};
export type cardScanUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card?: Prisma.CardUpdateOneRequiredWithoutScanNestedInput;
};
export type cardScanUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cardId?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cardScanCreateManyInput = {
    id?: string;
    cardId: string;
    ip?: string | null;
    userAgent?: string | null;
    source?: string;
    latitude?: number | null;
    longitude?: number | null;
    city?: string | null;
    country?: string | null;
    createdAt?: Date | string;
};
export type cardScanUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cardScanUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cardId?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CardScanListRelationFilter = {
    every?: Prisma.cardScanWhereInput;
    some?: Prisma.cardScanWhereInput;
    none?: Prisma.cardScanWhereInput;
};
export type cardScanOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type cardScanCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type cardScanAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type cardScanMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type cardScanMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type cardScanSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type cardScanCreateNestedManyWithoutCardInput = {
    create?: Prisma.XOR<Prisma.cardScanCreateWithoutCardInput, Prisma.cardScanUncheckedCreateWithoutCardInput> | Prisma.cardScanCreateWithoutCardInput[] | Prisma.cardScanUncheckedCreateWithoutCardInput[];
    connectOrCreate?: Prisma.cardScanCreateOrConnectWithoutCardInput | Prisma.cardScanCreateOrConnectWithoutCardInput[];
    createMany?: Prisma.cardScanCreateManyCardInputEnvelope;
    connect?: Prisma.cardScanWhereUniqueInput | Prisma.cardScanWhereUniqueInput[];
};
export type cardScanUncheckedCreateNestedManyWithoutCardInput = {
    create?: Prisma.XOR<Prisma.cardScanCreateWithoutCardInput, Prisma.cardScanUncheckedCreateWithoutCardInput> | Prisma.cardScanCreateWithoutCardInput[] | Prisma.cardScanUncheckedCreateWithoutCardInput[];
    connectOrCreate?: Prisma.cardScanCreateOrConnectWithoutCardInput | Prisma.cardScanCreateOrConnectWithoutCardInput[];
    createMany?: Prisma.cardScanCreateManyCardInputEnvelope;
    connect?: Prisma.cardScanWhereUniqueInput | Prisma.cardScanWhereUniqueInput[];
};
export type cardScanUpdateManyWithoutCardNestedInput = {
    create?: Prisma.XOR<Prisma.cardScanCreateWithoutCardInput, Prisma.cardScanUncheckedCreateWithoutCardInput> | Prisma.cardScanCreateWithoutCardInput[] | Prisma.cardScanUncheckedCreateWithoutCardInput[];
    connectOrCreate?: Prisma.cardScanCreateOrConnectWithoutCardInput | Prisma.cardScanCreateOrConnectWithoutCardInput[];
    upsert?: Prisma.cardScanUpsertWithWhereUniqueWithoutCardInput | Prisma.cardScanUpsertWithWhereUniqueWithoutCardInput[];
    createMany?: Prisma.cardScanCreateManyCardInputEnvelope;
    set?: Prisma.cardScanWhereUniqueInput | Prisma.cardScanWhereUniqueInput[];
    disconnect?: Prisma.cardScanWhereUniqueInput | Prisma.cardScanWhereUniqueInput[];
    delete?: Prisma.cardScanWhereUniqueInput | Prisma.cardScanWhereUniqueInput[];
    connect?: Prisma.cardScanWhereUniqueInput | Prisma.cardScanWhereUniqueInput[];
    update?: Prisma.cardScanUpdateWithWhereUniqueWithoutCardInput | Prisma.cardScanUpdateWithWhereUniqueWithoutCardInput[];
    updateMany?: Prisma.cardScanUpdateManyWithWhereWithoutCardInput | Prisma.cardScanUpdateManyWithWhereWithoutCardInput[];
    deleteMany?: Prisma.cardScanScalarWhereInput | Prisma.cardScanScalarWhereInput[];
};
export type cardScanUncheckedUpdateManyWithoutCardNestedInput = {
    create?: Prisma.XOR<Prisma.cardScanCreateWithoutCardInput, Prisma.cardScanUncheckedCreateWithoutCardInput> | Prisma.cardScanCreateWithoutCardInput[] | Prisma.cardScanUncheckedCreateWithoutCardInput[];
    connectOrCreate?: Prisma.cardScanCreateOrConnectWithoutCardInput | Prisma.cardScanCreateOrConnectWithoutCardInput[];
    upsert?: Prisma.cardScanUpsertWithWhereUniqueWithoutCardInput | Prisma.cardScanUpsertWithWhereUniqueWithoutCardInput[];
    createMany?: Prisma.cardScanCreateManyCardInputEnvelope;
    set?: Prisma.cardScanWhereUniqueInput | Prisma.cardScanWhereUniqueInput[];
    disconnect?: Prisma.cardScanWhereUniqueInput | Prisma.cardScanWhereUniqueInput[];
    delete?: Prisma.cardScanWhereUniqueInput | Prisma.cardScanWhereUniqueInput[];
    connect?: Prisma.cardScanWhereUniqueInput | Prisma.cardScanWhereUniqueInput[];
    update?: Prisma.cardScanUpdateWithWhereUniqueWithoutCardInput | Prisma.cardScanUpdateWithWhereUniqueWithoutCardInput[];
    updateMany?: Prisma.cardScanUpdateManyWithWhereWithoutCardInput | Prisma.cardScanUpdateManyWithWhereWithoutCardInput[];
    deleteMany?: Prisma.cardScanScalarWhereInput | Prisma.cardScanScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type cardScanCreateWithoutCardInput = {
    id?: string;
    ip?: string | null;
    userAgent?: string | null;
    source?: string;
    latitude?: number | null;
    longitude?: number | null;
    city?: string | null;
    country?: string | null;
    createdAt?: Date | string;
};
export type cardScanUncheckedCreateWithoutCardInput = {
    id?: string;
    ip?: string | null;
    userAgent?: string | null;
    source?: string;
    latitude?: number | null;
    longitude?: number | null;
    city?: string | null;
    country?: string | null;
    createdAt?: Date | string;
};
export type cardScanCreateOrConnectWithoutCardInput = {
    where: Prisma.cardScanWhereUniqueInput;
    create: Prisma.XOR<Prisma.cardScanCreateWithoutCardInput, Prisma.cardScanUncheckedCreateWithoutCardInput>;
};
export type cardScanCreateManyCardInputEnvelope = {
    data: Prisma.cardScanCreateManyCardInput | Prisma.cardScanCreateManyCardInput[];
    skipDuplicates?: boolean;
};
export type cardScanUpsertWithWhereUniqueWithoutCardInput = {
    where: Prisma.cardScanWhereUniqueInput;
    update: Prisma.XOR<Prisma.cardScanUpdateWithoutCardInput, Prisma.cardScanUncheckedUpdateWithoutCardInput>;
    create: Prisma.XOR<Prisma.cardScanCreateWithoutCardInput, Prisma.cardScanUncheckedCreateWithoutCardInput>;
};
export type cardScanUpdateWithWhereUniqueWithoutCardInput = {
    where: Prisma.cardScanWhereUniqueInput;
    data: Prisma.XOR<Prisma.cardScanUpdateWithoutCardInput, Prisma.cardScanUncheckedUpdateWithoutCardInput>;
};
export type cardScanUpdateManyWithWhereWithoutCardInput = {
    where: Prisma.cardScanScalarWhereInput;
    data: Prisma.XOR<Prisma.cardScanUpdateManyMutationInput, Prisma.cardScanUncheckedUpdateManyWithoutCardInput>;
};
export type cardScanScalarWhereInput = {
    AND?: Prisma.cardScanScalarWhereInput | Prisma.cardScanScalarWhereInput[];
    OR?: Prisma.cardScanScalarWhereInput[];
    NOT?: Prisma.cardScanScalarWhereInput | Prisma.cardScanScalarWhereInput[];
    id?: Prisma.StringFilter<"cardScan"> | string;
    cardId?: Prisma.StringFilter<"cardScan"> | string;
    ip?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    source?: Prisma.StringFilter<"cardScan"> | string;
    latitude?: Prisma.FloatNullableFilter<"cardScan"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"cardScan"> | number | null;
    city?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    country?: Prisma.StringNullableFilter<"cardScan"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cardScan"> | Date | string;
};
export type cardScanCreateManyCardInput = {
    id?: string;
    ip?: string | null;
    userAgent?: string | null;
    source?: string;
    latitude?: number | null;
    longitude?: number | null;
    city?: string | null;
    country?: string | null;
    createdAt?: Date | string;
};
export type cardScanUpdateWithoutCardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cardScanUncheckedUpdateWithoutCardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cardScanUncheckedUpdateManyWithoutCardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cardScanSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cardId?: boolean;
    ip?: boolean;
    userAgent?: boolean;
    source?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    city?: boolean;
    country?: boolean;
    createdAt?: boolean;
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cardScan"]>;
export type cardScanSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cardId?: boolean;
    ip?: boolean;
    userAgent?: boolean;
    source?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    city?: boolean;
    country?: boolean;
    createdAt?: boolean;
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cardScan"]>;
export type cardScanSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cardId?: boolean;
    ip?: boolean;
    userAgent?: boolean;
    source?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    city?: boolean;
    country?: boolean;
    createdAt?: boolean;
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cardScan"]>;
export type cardScanSelectScalar = {
    id?: boolean;
    cardId?: boolean;
    ip?: boolean;
    userAgent?: boolean;
    source?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    city?: boolean;
    country?: boolean;
    createdAt?: boolean;
};
export type cardScanOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cardId" | "ip" | "userAgent" | "source" | "latitude" | "longitude" | "city" | "country" | "createdAt", ExtArgs["result"]["cardScan"]>;
export type cardScanInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
};
export type cardScanIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
};
export type cardScanIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
};
export type $cardScanPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cardScan";
    objects: {
        card: Prisma.$CardPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cardId: string;
        ip: string | null;
        userAgent: string | null;
        source: string;
        latitude: number | null;
        longitude: number | null;
        city: string | null;
        country: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["cardScan"]>;
    composites: {};
};
export type cardScanGetPayload<S extends boolean | null | undefined | cardScanDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cardScanPayload, S>;
export type cardScanCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cardScanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CardScanCountAggregateInputType | true;
};
export interface cardScanDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cardScan'];
        meta: {
            name: 'cardScan';
        };
    };
    /**
     * Find zero or one CardScan that matches the filter.
     * @param {cardScanFindUniqueArgs} args - Arguments to find a CardScan
     * @example
     * // Get one CardScan
     * const cardScan = await prisma.cardScan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cardScanFindUniqueArgs>(args: Prisma.SelectSubset<T, cardScanFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cardScanClient<runtime.Types.Result.GetResult<Prisma.$cardScanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CardScan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cardScanFindUniqueOrThrowArgs} args - Arguments to find a CardScan
     * @example
     * // Get one CardScan
     * const cardScan = await prisma.cardScan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cardScanFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cardScanFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cardScanClient<runtime.Types.Result.GetResult<Prisma.$cardScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CardScan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardScanFindFirstArgs} args - Arguments to find a CardScan
     * @example
     * // Get one CardScan
     * const cardScan = await prisma.cardScan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cardScanFindFirstArgs>(args?: Prisma.SelectSubset<T, cardScanFindFirstArgs<ExtArgs>>): Prisma.Prisma__cardScanClient<runtime.Types.Result.GetResult<Prisma.$cardScanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CardScan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardScanFindFirstOrThrowArgs} args - Arguments to find a CardScan
     * @example
     * // Get one CardScan
     * const cardScan = await prisma.cardScan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cardScanFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cardScanFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cardScanClient<runtime.Types.Result.GetResult<Prisma.$cardScanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CardScans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardScanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardScans
     * const cardScans = await prisma.cardScan.findMany()
     *
     * // Get first 10 CardScans
     * const cardScans = await prisma.cardScan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cardScanWithIdOnly = await prisma.cardScan.findMany({ select: { id: true } })
     *
     */
    findMany<T extends cardScanFindManyArgs>(args?: Prisma.SelectSubset<T, cardScanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cardScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CardScan.
     * @param {cardScanCreateArgs} args - Arguments to create a CardScan.
     * @example
     * // Create one CardScan
     * const CardScan = await prisma.cardScan.create({
     *   data: {
     *     // ... data to create a CardScan
     *   }
     * })
     *
     */
    create<T extends cardScanCreateArgs>(args: Prisma.SelectSubset<T, cardScanCreateArgs<ExtArgs>>): Prisma.Prisma__cardScanClient<runtime.Types.Result.GetResult<Prisma.$cardScanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CardScans.
     * @param {cardScanCreateManyArgs} args - Arguments to create many CardScans.
     * @example
     * // Create many CardScans
     * const cardScan = await prisma.cardScan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends cardScanCreateManyArgs>(args?: Prisma.SelectSubset<T, cardScanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CardScans and returns the data saved in the database.
     * @param {cardScanCreateManyAndReturnArgs} args - Arguments to create many CardScans.
     * @example
     * // Create many CardScans
     * const cardScan = await prisma.cardScan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CardScans and only return the `id`
     * const cardScanWithIdOnly = await prisma.cardScan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends cardScanCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, cardScanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cardScanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CardScan.
     * @param {cardScanDeleteArgs} args - Arguments to delete one CardScan.
     * @example
     * // Delete one CardScan
     * const CardScan = await prisma.cardScan.delete({
     *   where: {
     *     // ... filter to delete one CardScan
     *   }
     * })
     *
     */
    delete<T extends cardScanDeleteArgs>(args: Prisma.SelectSubset<T, cardScanDeleteArgs<ExtArgs>>): Prisma.Prisma__cardScanClient<runtime.Types.Result.GetResult<Prisma.$cardScanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CardScan.
     * @param {cardScanUpdateArgs} args - Arguments to update one CardScan.
     * @example
     * // Update one CardScan
     * const cardScan = await prisma.cardScan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends cardScanUpdateArgs>(args: Prisma.SelectSubset<T, cardScanUpdateArgs<ExtArgs>>): Prisma.Prisma__cardScanClient<runtime.Types.Result.GetResult<Prisma.$cardScanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CardScans.
     * @param {cardScanDeleteManyArgs} args - Arguments to filter CardScans to delete.
     * @example
     * // Delete a few CardScans
     * const { count } = await prisma.cardScan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends cardScanDeleteManyArgs>(args?: Prisma.SelectSubset<T, cardScanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CardScans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardScanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardScans
     * const cardScan = await prisma.cardScan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends cardScanUpdateManyArgs>(args: Prisma.SelectSubset<T, cardScanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CardScans and returns the data updated in the database.
     * @param {cardScanUpdateManyAndReturnArgs} args - Arguments to update many CardScans.
     * @example
     * // Update many CardScans
     * const cardScan = await prisma.cardScan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CardScans and only return the `id`
     * const cardScanWithIdOnly = await prisma.cardScan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends cardScanUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, cardScanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cardScanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CardScan.
     * @param {cardScanUpsertArgs} args - Arguments to update or create a CardScan.
     * @example
     * // Update or create a CardScan
     * const cardScan = await prisma.cardScan.upsert({
     *   create: {
     *     // ... data to create a CardScan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardScan we want to update
     *   }
     * })
     */
    upsert<T extends cardScanUpsertArgs>(args: Prisma.SelectSubset<T, cardScanUpsertArgs<ExtArgs>>): Prisma.Prisma__cardScanClient<runtime.Types.Result.GetResult<Prisma.$cardScanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CardScans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardScanCountArgs} args - Arguments to filter CardScans to count.
     * @example
     * // Count the number of CardScans
     * const count = await prisma.cardScan.count({
     *   where: {
     *     // ... the filter for the CardScans we want to count
     *   }
     * })
    **/
    count<T extends cardScanCountArgs>(args?: Prisma.Subset<T, cardScanCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CardScanCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CardScan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardScanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardScanAggregateArgs>(args: Prisma.Subset<T, CardScanAggregateArgs>): Prisma.PrismaPromise<GetCardScanAggregateType<T>>;
    /**
     * Group by CardScan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardScanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends cardScanGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cardScanGroupByArgs['orderBy'];
    } : {
        orderBy?: cardScanGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cardScanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardScanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the cardScan model
     */
    readonly fields: cardScanFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for cardScan.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__cardScanClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    card<T extends Prisma.CardDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CardDefaultArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the cardScan model
 */
export interface cardScanFieldRefs {
    readonly id: Prisma.FieldRef<"cardScan", 'String'>;
    readonly cardId: Prisma.FieldRef<"cardScan", 'String'>;
    readonly ip: Prisma.FieldRef<"cardScan", 'String'>;
    readonly userAgent: Prisma.FieldRef<"cardScan", 'String'>;
    readonly source: Prisma.FieldRef<"cardScan", 'String'>;
    readonly latitude: Prisma.FieldRef<"cardScan", 'Float'>;
    readonly longitude: Prisma.FieldRef<"cardScan", 'Float'>;
    readonly city: Prisma.FieldRef<"cardScan", 'String'>;
    readonly country: Prisma.FieldRef<"cardScan", 'String'>;
    readonly createdAt: Prisma.FieldRef<"cardScan", 'DateTime'>;
}
/**
 * cardScan findUnique
 */
export type cardScanFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanInclude<ExtArgs> | null;
    /**
     * Filter, which cardScan to fetch.
     */
    where: Prisma.cardScanWhereUniqueInput;
};
/**
 * cardScan findUniqueOrThrow
 */
export type cardScanFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanInclude<ExtArgs> | null;
    /**
     * Filter, which cardScan to fetch.
     */
    where: Prisma.cardScanWhereUniqueInput;
};
/**
 * cardScan findFirst
 */
export type cardScanFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanInclude<ExtArgs> | null;
    /**
     * Filter, which cardScan to fetch.
     */
    where?: Prisma.cardScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cardScans to fetch.
     */
    orderBy?: Prisma.cardScanOrderByWithRelationInput | Prisma.cardScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cardScans.
     */
    cursor?: Prisma.cardScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cardScans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cardScans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cardScans.
     */
    distinct?: Prisma.CardScanScalarFieldEnum | Prisma.CardScanScalarFieldEnum[];
};
/**
 * cardScan findFirstOrThrow
 */
export type cardScanFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanInclude<ExtArgs> | null;
    /**
     * Filter, which cardScan to fetch.
     */
    where?: Prisma.cardScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cardScans to fetch.
     */
    orderBy?: Prisma.cardScanOrderByWithRelationInput | Prisma.cardScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cardScans.
     */
    cursor?: Prisma.cardScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cardScans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cardScans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cardScans.
     */
    distinct?: Prisma.CardScanScalarFieldEnum | Prisma.CardScanScalarFieldEnum[];
};
/**
 * cardScan findMany
 */
export type cardScanFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanInclude<ExtArgs> | null;
    /**
     * Filter, which cardScans to fetch.
     */
    where?: Prisma.cardScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cardScans to fetch.
     */
    orderBy?: Prisma.cardScanOrderByWithRelationInput | Prisma.cardScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cardScans.
     */
    cursor?: Prisma.cardScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cardScans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cardScans.
     */
    skip?: number;
    distinct?: Prisma.CardScanScalarFieldEnum | Prisma.CardScanScalarFieldEnum[];
};
/**
 * cardScan create
 */
export type cardScanCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanInclude<ExtArgs> | null;
    /**
     * The data needed to create a cardScan.
     */
    data: Prisma.XOR<Prisma.cardScanCreateInput, Prisma.cardScanUncheckedCreateInput>;
};
/**
 * cardScan createMany
 */
export type cardScanCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many cardScans.
     */
    data: Prisma.cardScanCreateManyInput | Prisma.cardScanCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * cardScan createManyAndReturn
 */
export type cardScanCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * The data used to create many cardScans.
     */
    data: Prisma.cardScanCreateManyInput | Prisma.cardScanCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * cardScan update
 */
export type cardScanUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanInclude<ExtArgs> | null;
    /**
     * The data needed to update a cardScan.
     */
    data: Prisma.XOR<Prisma.cardScanUpdateInput, Prisma.cardScanUncheckedUpdateInput>;
    /**
     * Choose, which cardScan to update.
     */
    where: Prisma.cardScanWhereUniqueInput;
};
/**
 * cardScan updateMany
 */
export type cardScanUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update cardScans.
     */
    data: Prisma.XOR<Prisma.cardScanUpdateManyMutationInput, Prisma.cardScanUncheckedUpdateManyInput>;
    /**
     * Filter which cardScans to update
     */
    where?: Prisma.cardScanWhereInput;
    /**
     * Limit how many cardScans to update.
     */
    limit?: number;
};
/**
 * cardScan updateManyAndReturn
 */
export type cardScanUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * The data used to update cardScans.
     */
    data: Prisma.XOR<Prisma.cardScanUpdateManyMutationInput, Prisma.cardScanUncheckedUpdateManyInput>;
    /**
     * Filter which cardScans to update
     */
    where?: Prisma.cardScanWhereInput;
    /**
     * Limit how many cardScans to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * cardScan upsert
 */
export type cardScanUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanInclude<ExtArgs> | null;
    /**
     * The filter to search for the cardScan to update in case it exists.
     */
    where: Prisma.cardScanWhereUniqueInput;
    /**
     * In case the cardScan found by the `where` argument doesn't exist, create a new cardScan with this data.
     */
    create: Prisma.XOR<Prisma.cardScanCreateInput, Prisma.cardScanUncheckedCreateInput>;
    /**
     * In case the cardScan was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.cardScanUpdateInput, Prisma.cardScanUncheckedUpdateInput>;
};
/**
 * cardScan delete
 */
export type cardScanDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanInclude<ExtArgs> | null;
    /**
     * Filter which cardScan to delete.
     */
    where: Prisma.cardScanWhereUniqueInput;
};
/**
 * cardScan deleteMany
 */
export type cardScanDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cardScans to delete
     */
    where?: Prisma.cardScanWhereInput;
    /**
     * Limit how many cardScans to delete.
     */
    limit?: number;
};
/**
 * cardScan without action
 */
export type cardScanDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cardScan
     */
    select?: Prisma.cardScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cardScan
     */
    omit?: Prisma.cardScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cardScanInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=cardScan.d.ts.map