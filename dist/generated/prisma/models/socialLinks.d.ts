import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model socialLinks
 *
 */
export type socialLinksModel = runtime.Types.Result.DefaultSelection<Prisma.$socialLinksPayload>;
export type AggregateSocialLinks = {
    _count: SocialLinksCountAggregateOutputType | null;
    _min: SocialLinksMinAggregateOutputType | null;
    _max: SocialLinksMaxAggregateOutputType | null;
};
export type SocialLinksMinAggregateOutputType = {
    id: string | null;
    cardId: string | null;
};
export type SocialLinksMaxAggregateOutputType = {
    id: string | null;
    cardId: string | null;
};
export type SocialLinksCountAggregateOutputType = {
    id: number;
    cardId: number;
    links: number;
    _all: number;
};
export type SocialLinksMinAggregateInputType = {
    id?: true;
    cardId?: true;
};
export type SocialLinksMaxAggregateInputType = {
    id?: true;
    cardId?: true;
};
export type SocialLinksCountAggregateInputType = {
    id?: true;
    cardId?: true;
    links?: true;
    _all?: true;
};
export type SocialLinksAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which socialLinks to aggregate.
     */
    where?: Prisma.socialLinksWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of socialLinks to fetch.
     */
    orderBy?: Prisma.socialLinksOrderByWithRelationInput | Prisma.socialLinksOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.socialLinksWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` socialLinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` socialLinks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned socialLinks
    **/
    _count?: true | SocialLinksCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinksMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinksMaxAggregateInputType;
};
export type GetSocialLinksAggregateType<T extends SocialLinksAggregateArgs> = {
    [P in keyof T & keyof AggregateSocialLinks]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSocialLinks[P]> : Prisma.GetScalarType<T[P], AggregateSocialLinks[P]>;
};
export type socialLinksGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.socialLinksWhereInput;
    orderBy?: Prisma.socialLinksOrderByWithAggregationInput | Prisma.socialLinksOrderByWithAggregationInput[];
    by: Prisma.SocialLinksScalarFieldEnum[] | Prisma.SocialLinksScalarFieldEnum;
    having?: Prisma.socialLinksScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SocialLinksCountAggregateInputType | true;
    _min?: SocialLinksMinAggregateInputType;
    _max?: SocialLinksMaxAggregateInputType;
};
export type SocialLinksGroupByOutputType = {
    id: string;
    cardId: string;
    links: runtime.JsonValue[];
    _count: SocialLinksCountAggregateOutputType | null;
    _min: SocialLinksMinAggregateOutputType | null;
    _max: SocialLinksMaxAggregateOutputType | null;
};
type GetSocialLinksGroupByPayload<T extends socialLinksGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SocialLinksGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SocialLinksGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SocialLinksGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SocialLinksGroupByOutputType[P]>;
}>>;
export type socialLinksWhereInput = {
    AND?: Prisma.socialLinksWhereInput | Prisma.socialLinksWhereInput[];
    OR?: Prisma.socialLinksWhereInput[];
    NOT?: Prisma.socialLinksWhereInput | Prisma.socialLinksWhereInput[];
    id?: Prisma.StringFilter<"socialLinks"> | string;
    cardId?: Prisma.StringFilter<"socialLinks"> | string;
    links?: Prisma.JsonNullableListFilter<"socialLinks">;
    card?: Prisma.XOR<Prisma.CardScalarRelationFilter, Prisma.CardWhereInput>;
};
export type socialLinksOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    links?: Prisma.SortOrder;
    card?: Prisma.CardOrderByWithRelationInput;
};
export type socialLinksWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    cardId?: string;
    AND?: Prisma.socialLinksWhereInput | Prisma.socialLinksWhereInput[];
    OR?: Prisma.socialLinksWhereInput[];
    NOT?: Prisma.socialLinksWhereInput | Prisma.socialLinksWhereInput[];
    links?: Prisma.JsonNullableListFilter<"socialLinks">;
    card?: Prisma.XOR<Prisma.CardScalarRelationFilter, Prisma.CardWhereInput>;
}, "id" | "cardId">;
export type socialLinksOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    links?: Prisma.SortOrder;
    _count?: Prisma.socialLinksCountOrderByAggregateInput;
    _max?: Prisma.socialLinksMaxOrderByAggregateInput;
    _min?: Prisma.socialLinksMinOrderByAggregateInput;
};
export type socialLinksScalarWhereWithAggregatesInput = {
    AND?: Prisma.socialLinksScalarWhereWithAggregatesInput | Prisma.socialLinksScalarWhereWithAggregatesInput[];
    OR?: Prisma.socialLinksScalarWhereWithAggregatesInput[];
    NOT?: Prisma.socialLinksScalarWhereWithAggregatesInput | Prisma.socialLinksScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"socialLinks"> | string;
    cardId?: Prisma.StringWithAggregatesFilter<"socialLinks"> | string;
    links?: Prisma.JsonNullableListFilter<"socialLinks">;
};
export type socialLinksCreateInput = {
    id?: string;
    links?: Prisma.socialLinksCreatelinksInput | runtime.InputJsonValue[];
    card: Prisma.CardCreateNestedOneWithoutSocialLinksInput;
};
export type socialLinksUncheckedCreateInput = {
    id?: string;
    cardId: string;
    links?: Prisma.socialLinksCreatelinksInput | runtime.InputJsonValue[];
};
export type socialLinksUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    links?: Prisma.socialLinksUpdatelinksInput | runtime.InputJsonValue[];
    card?: Prisma.CardUpdateOneRequiredWithoutSocialLinksNestedInput;
};
export type socialLinksUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cardId?: Prisma.StringFieldUpdateOperationsInput | string;
    links?: Prisma.socialLinksUpdatelinksInput | runtime.InputJsonValue[];
};
export type socialLinksCreateManyInput = {
    id?: string;
    cardId: string;
    links?: Prisma.socialLinksCreatelinksInput | runtime.InputJsonValue[];
};
export type socialLinksUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    links?: Prisma.socialLinksUpdatelinksInput | runtime.InputJsonValue[];
};
export type socialLinksUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cardId?: Prisma.StringFieldUpdateOperationsInput | string;
    links?: Prisma.socialLinksUpdatelinksInput | runtime.InputJsonValue[];
};
export type SocialLinksNullableScalarRelationFilter = {
    is?: Prisma.socialLinksWhereInput | null;
    isNot?: Prisma.socialLinksWhereInput | null;
};
export type JsonNullableListFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableListFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue[] | Prisma.ListJsonFieldRefInput<$PrismaModel> | null;
    has?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    hasEvery?: runtime.InputJsonValue[] | Prisma.ListJsonFieldRefInput<$PrismaModel>;
    hasSome?: runtime.InputJsonValue[] | Prisma.ListJsonFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type socialLinksCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    links?: Prisma.SortOrder;
};
export type socialLinksMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
};
export type socialLinksMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
};
export type socialLinksCreateNestedOneWithoutCardInput = {
    create?: Prisma.XOR<Prisma.socialLinksCreateWithoutCardInput, Prisma.socialLinksUncheckedCreateWithoutCardInput>;
    connectOrCreate?: Prisma.socialLinksCreateOrConnectWithoutCardInput;
    connect?: Prisma.socialLinksWhereUniqueInput;
};
export type socialLinksUncheckedCreateNestedOneWithoutCardInput = {
    create?: Prisma.XOR<Prisma.socialLinksCreateWithoutCardInput, Prisma.socialLinksUncheckedCreateWithoutCardInput>;
    connectOrCreate?: Prisma.socialLinksCreateOrConnectWithoutCardInput;
    connect?: Prisma.socialLinksWhereUniqueInput;
};
export type socialLinksUpdateOneWithoutCardNestedInput = {
    create?: Prisma.XOR<Prisma.socialLinksCreateWithoutCardInput, Prisma.socialLinksUncheckedCreateWithoutCardInput>;
    connectOrCreate?: Prisma.socialLinksCreateOrConnectWithoutCardInput;
    upsert?: Prisma.socialLinksUpsertWithoutCardInput;
    disconnect?: Prisma.socialLinksWhereInput | boolean;
    delete?: Prisma.socialLinksWhereInput | boolean;
    connect?: Prisma.socialLinksWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.socialLinksUpdateToOneWithWhereWithoutCardInput, Prisma.socialLinksUpdateWithoutCardInput>, Prisma.socialLinksUncheckedUpdateWithoutCardInput>;
};
export type socialLinksUncheckedUpdateOneWithoutCardNestedInput = {
    create?: Prisma.XOR<Prisma.socialLinksCreateWithoutCardInput, Prisma.socialLinksUncheckedCreateWithoutCardInput>;
    connectOrCreate?: Prisma.socialLinksCreateOrConnectWithoutCardInput;
    upsert?: Prisma.socialLinksUpsertWithoutCardInput;
    disconnect?: Prisma.socialLinksWhereInput | boolean;
    delete?: Prisma.socialLinksWhereInput | boolean;
    connect?: Prisma.socialLinksWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.socialLinksUpdateToOneWithWhereWithoutCardInput, Prisma.socialLinksUpdateWithoutCardInput>, Prisma.socialLinksUncheckedUpdateWithoutCardInput>;
};
export type socialLinksCreatelinksInput = {
    set: runtime.InputJsonValue[];
};
export type socialLinksUpdatelinksInput = {
    set?: runtime.InputJsonValue[];
    push?: runtime.InputJsonValue | runtime.InputJsonValue[];
};
export type socialLinksCreateWithoutCardInput = {
    id?: string;
    links?: Prisma.socialLinksCreatelinksInput | runtime.InputJsonValue[];
};
export type socialLinksUncheckedCreateWithoutCardInput = {
    id?: string;
    links?: Prisma.socialLinksCreatelinksInput | runtime.InputJsonValue[];
};
export type socialLinksCreateOrConnectWithoutCardInput = {
    where: Prisma.socialLinksWhereUniqueInput;
    create: Prisma.XOR<Prisma.socialLinksCreateWithoutCardInput, Prisma.socialLinksUncheckedCreateWithoutCardInput>;
};
export type socialLinksUpsertWithoutCardInput = {
    update: Prisma.XOR<Prisma.socialLinksUpdateWithoutCardInput, Prisma.socialLinksUncheckedUpdateWithoutCardInput>;
    create: Prisma.XOR<Prisma.socialLinksCreateWithoutCardInput, Prisma.socialLinksUncheckedCreateWithoutCardInput>;
    where?: Prisma.socialLinksWhereInput;
};
export type socialLinksUpdateToOneWithWhereWithoutCardInput = {
    where?: Prisma.socialLinksWhereInput;
    data: Prisma.XOR<Prisma.socialLinksUpdateWithoutCardInput, Prisma.socialLinksUncheckedUpdateWithoutCardInput>;
};
export type socialLinksUpdateWithoutCardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    links?: Prisma.socialLinksUpdatelinksInput | runtime.InputJsonValue[];
};
export type socialLinksUncheckedUpdateWithoutCardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    links?: Prisma.socialLinksUpdatelinksInput | runtime.InputJsonValue[];
};
export type socialLinksSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cardId?: boolean;
    links?: boolean;
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["socialLinks"]>;
export type socialLinksSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cardId?: boolean;
    links?: boolean;
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["socialLinks"]>;
export type socialLinksSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cardId?: boolean;
    links?: boolean;
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["socialLinks"]>;
export type socialLinksSelectScalar = {
    id?: boolean;
    cardId?: boolean;
    links?: boolean;
};
export type socialLinksOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cardId" | "links", ExtArgs["result"]["socialLinks"]>;
export type socialLinksInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
};
export type socialLinksIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
};
export type socialLinksIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
};
export type $socialLinksPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "socialLinks";
    objects: {
        card: Prisma.$CardPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cardId: string;
        links: runtime.JsonValue[];
    }, ExtArgs["result"]["socialLinks"]>;
    composites: {};
};
export type socialLinksGetPayload<S extends boolean | null | undefined | socialLinksDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$socialLinksPayload, S>;
export type socialLinksCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<socialLinksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SocialLinksCountAggregateInputType | true;
};
export interface socialLinksDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['socialLinks'];
        meta: {
            name: 'socialLinks';
        };
    };
    /**
     * Find zero or one SocialLinks that matches the filter.
     * @param {socialLinksFindUniqueArgs} args - Arguments to find a SocialLinks
     * @example
     * // Get one SocialLinks
     * const socialLinks = await prisma.socialLinks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends socialLinksFindUniqueArgs>(args: Prisma.SelectSubset<T, socialLinksFindUniqueArgs<ExtArgs>>): Prisma.Prisma__socialLinksClient<runtime.Types.Result.GetResult<Prisma.$socialLinksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SocialLinks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {socialLinksFindUniqueOrThrowArgs} args - Arguments to find a SocialLinks
     * @example
     * // Get one SocialLinks
     * const socialLinks = await prisma.socialLinks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends socialLinksFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, socialLinksFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__socialLinksClient<runtime.Types.Result.GetResult<Prisma.$socialLinksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialLinksFindFirstArgs} args - Arguments to find a SocialLinks
     * @example
     * // Get one SocialLinks
     * const socialLinks = await prisma.socialLinks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends socialLinksFindFirstArgs>(args?: Prisma.SelectSubset<T, socialLinksFindFirstArgs<ExtArgs>>): Prisma.Prisma__socialLinksClient<runtime.Types.Result.GetResult<Prisma.$socialLinksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SocialLinks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialLinksFindFirstOrThrowArgs} args - Arguments to find a SocialLinks
     * @example
     * // Get one SocialLinks
     * const socialLinks = await prisma.socialLinks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends socialLinksFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, socialLinksFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__socialLinksClient<runtime.Types.Result.GetResult<Prisma.$socialLinksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialLinksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinks
     * const socialLinks = await prisma.socialLinks.findMany()
     *
     * // Get first 10 SocialLinks
     * const socialLinks = await prisma.socialLinks.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const socialLinksWithIdOnly = await prisma.socialLinks.findMany({ select: { id: true } })
     *
     */
    findMany<T extends socialLinksFindManyArgs>(args?: Prisma.SelectSubset<T, socialLinksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$socialLinksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SocialLinks.
     * @param {socialLinksCreateArgs} args - Arguments to create a SocialLinks.
     * @example
     * // Create one SocialLinks
     * const SocialLinks = await prisma.socialLinks.create({
     *   data: {
     *     // ... data to create a SocialLinks
     *   }
     * })
     *
     */
    create<T extends socialLinksCreateArgs>(args: Prisma.SelectSubset<T, socialLinksCreateArgs<ExtArgs>>): Prisma.Prisma__socialLinksClient<runtime.Types.Result.GetResult<Prisma.$socialLinksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SocialLinks.
     * @param {socialLinksCreateManyArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLinks = await prisma.socialLinks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends socialLinksCreateManyArgs>(args?: Prisma.SelectSubset<T, socialLinksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SocialLinks and returns the data saved in the database.
     * @param {socialLinksCreateManyAndReturnArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLinks = await prisma.socialLinks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SocialLinks and only return the `id`
     * const socialLinksWithIdOnly = await prisma.socialLinks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends socialLinksCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, socialLinksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$socialLinksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SocialLinks.
     * @param {socialLinksDeleteArgs} args - Arguments to delete one SocialLinks.
     * @example
     * // Delete one SocialLinks
     * const SocialLinks = await prisma.socialLinks.delete({
     *   where: {
     *     // ... filter to delete one SocialLinks
     *   }
     * })
     *
     */
    delete<T extends socialLinksDeleteArgs>(args: Prisma.SelectSubset<T, socialLinksDeleteArgs<ExtArgs>>): Prisma.Prisma__socialLinksClient<runtime.Types.Result.GetResult<Prisma.$socialLinksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SocialLinks.
     * @param {socialLinksUpdateArgs} args - Arguments to update one SocialLinks.
     * @example
     * // Update one SocialLinks
     * const socialLinks = await prisma.socialLinks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends socialLinksUpdateArgs>(args: Prisma.SelectSubset<T, socialLinksUpdateArgs<ExtArgs>>): Prisma.Prisma__socialLinksClient<runtime.Types.Result.GetResult<Prisma.$socialLinksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SocialLinks.
     * @param {socialLinksDeleteManyArgs} args - Arguments to filter SocialLinks to delete.
     * @example
     * // Delete a few SocialLinks
     * const { count } = await prisma.socialLinks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends socialLinksDeleteManyArgs>(args?: Prisma.SelectSubset<T, socialLinksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialLinksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinks
     * const socialLinks = await prisma.socialLinks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends socialLinksUpdateManyArgs>(args: Prisma.SelectSubset<T, socialLinksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SocialLinks and returns the data updated in the database.
     * @param {socialLinksUpdateManyAndReturnArgs} args - Arguments to update many SocialLinks.
     * @example
     * // Update many SocialLinks
     * const socialLinks = await prisma.socialLinks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SocialLinks and only return the `id`
     * const socialLinksWithIdOnly = await prisma.socialLinks.updateManyAndReturn({
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
    updateManyAndReturn<T extends socialLinksUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, socialLinksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$socialLinksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SocialLinks.
     * @param {socialLinksUpsertArgs} args - Arguments to update or create a SocialLinks.
     * @example
     * // Update or create a SocialLinks
     * const socialLinks = await prisma.socialLinks.upsert({
     *   create: {
     *     // ... data to create a SocialLinks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLinks we want to update
     *   }
     * })
     */
    upsert<T extends socialLinksUpsertArgs>(args: Prisma.SelectSubset<T, socialLinksUpsertArgs<ExtArgs>>): Prisma.Prisma__socialLinksClient<runtime.Types.Result.GetResult<Prisma.$socialLinksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialLinksCountArgs} args - Arguments to filter SocialLinks to count.
     * @example
     * // Count the number of SocialLinks
     * const count = await prisma.socialLinks.count({
     *   where: {
     *     // ... the filter for the SocialLinks we want to count
     *   }
     * })
    **/
    count<T extends socialLinksCountArgs>(args?: Prisma.Subset<T, socialLinksCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SocialLinksCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialLinksAggregateArgs>(args: Prisma.Subset<T, SocialLinksAggregateArgs>): Prisma.PrismaPromise<GetSocialLinksAggregateType<T>>;
    /**
     * Group by SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialLinksGroupByArgs} args - Group by arguments.
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
    groupBy<T extends socialLinksGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: socialLinksGroupByArgs['orderBy'];
    } : {
        orderBy?: socialLinksGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, socialLinksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the socialLinks model
     */
    readonly fields: socialLinksFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for socialLinks.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__socialLinksClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the socialLinks model
 */
export interface socialLinksFieldRefs {
    readonly id: Prisma.FieldRef<"socialLinks", 'String'>;
    readonly cardId: Prisma.FieldRef<"socialLinks", 'String'>;
    readonly links: Prisma.FieldRef<"socialLinks", 'Json[]'>;
}
/**
 * socialLinks findUnique
 */
export type socialLinksFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksInclude<ExtArgs> | null;
    /**
     * Filter, which socialLinks to fetch.
     */
    where: Prisma.socialLinksWhereUniqueInput;
};
/**
 * socialLinks findUniqueOrThrow
 */
export type socialLinksFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksInclude<ExtArgs> | null;
    /**
     * Filter, which socialLinks to fetch.
     */
    where: Prisma.socialLinksWhereUniqueInput;
};
/**
 * socialLinks findFirst
 */
export type socialLinksFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksInclude<ExtArgs> | null;
    /**
     * Filter, which socialLinks to fetch.
     */
    where?: Prisma.socialLinksWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of socialLinks to fetch.
     */
    orderBy?: Prisma.socialLinksOrderByWithRelationInput | Prisma.socialLinksOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for socialLinks.
     */
    cursor?: Prisma.socialLinksWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` socialLinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` socialLinks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of socialLinks.
     */
    distinct?: Prisma.SocialLinksScalarFieldEnum | Prisma.SocialLinksScalarFieldEnum[];
};
/**
 * socialLinks findFirstOrThrow
 */
export type socialLinksFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksInclude<ExtArgs> | null;
    /**
     * Filter, which socialLinks to fetch.
     */
    where?: Prisma.socialLinksWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of socialLinks to fetch.
     */
    orderBy?: Prisma.socialLinksOrderByWithRelationInput | Prisma.socialLinksOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for socialLinks.
     */
    cursor?: Prisma.socialLinksWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` socialLinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` socialLinks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of socialLinks.
     */
    distinct?: Prisma.SocialLinksScalarFieldEnum | Prisma.SocialLinksScalarFieldEnum[];
};
/**
 * socialLinks findMany
 */
export type socialLinksFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksInclude<ExtArgs> | null;
    /**
     * Filter, which socialLinks to fetch.
     */
    where?: Prisma.socialLinksWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of socialLinks to fetch.
     */
    orderBy?: Prisma.socialLinksOrderByWithRelationInput | Prisma.socialLinksOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing socialLinks.
     */
    cursor?: Prisma.socialLinksWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` socialLinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` socialLinks.
     */
    skip?: number;
    distinct?: Prisma.SocialLinksScalarFieldEnum | Prisma.SocialLinksScalarFieldEnum[];
};
/**
 * socialLinks create
 */
export type socialLinksCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksInclude<ExtArgs> | null;
    /**
     * The data needed to create a socialLinks.
     */
    data: Prisma.XOR<Prisma.socialLinksCreateInput, Prisma.socialLinksUncheckedCreateInput>;
};
/**
 * socialLinks createMany
 */
export type socialLinksCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many socialLinks.
     */
    data: Prisma.socialLinksCreateManyInput | Prisma.socialLinksCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * socialLinks createManyAndReturn
 */
export type socialLinksCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * The data used to create many socialLinks.
     */
    data: Prisma.socialLinksCreateManyInput | Prisma.socialLinksCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * socialLinks update
 */
export type socialLinksUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksInclude<ExtArgs> | null;
    /**
     * The data needed to update a socialLinks.
     */
    data: Prisma.XOR<Prisma.socialLinksUpdateInput, Prisma.socialLinksUncheckedUpdateInput>;
    /**
     * Choose, which socialLinks to update.
     */
    where: Prisma.socialLinksWhereUniqueInput;
};
/**
 * socialLinks updateMany
 */
export type socialLinksUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update socialLinks.
     */
    data: Prisma.XOR<Prisma.socialLinksUpdateManyMutationInput, Prisma.socialLinksUncheckedUpdateManyInput>;
    /**
     * Filter which socialLinks to update
     */
    where?: Prisma.socialLinksWhereInput;
    /**
     * Limit how many socialLinks to update.
     */
    limit?: number;
};
/**
 * socialLinks updateManyAndReturn
 */
export type socialLinksUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * The data used to update socialLinks.
     */
    data: Prisma.XOR<Prisma.socialLinksUpdateManyMutationInput, Prisma.socialLinksUncheckedUpdateManyInput>;
    /**
     * Filter which socialLinks to update
     */
    where?: Prisma.socialLinksWhereInput;
    /**
     * Limit how many socialLinks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * socialLinks upsert
 */
export type socialLinksUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksInclude<ExtArgs> | null;
    /**
     * The filter to search for the socialLinks to update in case it exists.
     */
    where: Prisma.socialLinksWhereUniqueInput;
    /**
     * In case the socialLinks found by the `where` argument doesn't exist, create a new socialLinks with this data.
     */
    create: Prisma.XOR<Prisma.socialLinksCreateInput, Prisma.socialLinksUncheckedCreateInput>;
    /**
     * In case the socialLinks was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.socialLinksUpdateInput, Prisma.socialLinksUncheckedUpdateInput>;
};
/**
 * socialLinks delete
 */
export type socialLinksDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksInclude<ExtArgs> | null;
    /**
     * Filter which socialLinks to delete.
     */
    where: Prisma.socialLinksWhereUniqueInput;
};
/**
 * socialLinks deleteMany
 */
export type socialLinksDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which socialLinks to delete
     */
    where?: Prisma.socialLinksWhereInput;
    /**
     * Limit how many socialLinks to delete.
     */
    limit?: number;
};
/**
 * socialLinks without action
 */
export type socialLinksDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socialLinks
     */
    select?: Prisma.socialLinksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the socialLinks
     */
    omit?: Prisma.socialLinksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.socialLinksInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=socialLinks.d.ts.map