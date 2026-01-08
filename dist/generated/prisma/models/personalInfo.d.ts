import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model personalInfo
 *
 */
export type personalInfoModel = runtime.Types.Result.DefaultSelection<Prisma.$personalInfoPayload>;
export type AggregatePersonalInfo = {
    _count: PersonalInfoCountAggregateOutputType | null;
    _min: PersonalInfoMinAggregateOutputType | null;
    _max: PersonalInfoMaxAggregateOutputType | null;
};
export type PersonalInfoMinAggregateOutputType = {
    id: string | null;
    cardId: string | null;
    firstName: string | null;
    lastName: string | null;
    jobTitle: string | null;
};
export type PersonalInfoMaxAggregateOutputType = {
    id: string | null;
    cardId: string | null;
    firstName: string | null;
    lastName: string | null;
    jobTitle: string | null;
};
export type PersonalInfoCountAggregateOutputType = {
    id: number;
    cardId: number;
    firstName: number;
    lastName: number;
    jobTitle: number;
    _all: number;
};
export type PersonalInfoMinAggregateInputType = {
    id?: true;
    cardId?: true;
    firstName?: true;
    lastName?: true;
    jobTitle?: true;
};
export type PersonalInfoMaxAggregateInputType = {
    id?: true;
    cardId?: true;
    firstName?: true;
    lastName?: true;
    jobTitle?: true;
};
export type PersonalInfoCountAggregateInputType = {
    id?: true;
    cardId?: true;
    firstName?: true;
    lastName?: true;
    jobTitle?: true;
    _all?: true;
};
export type PersonalInfoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which personalInfo to aggregate.
     */
    where?: Prisma.personalInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personalInfos to fetch.
     */
    orderBy?: Prisma.personalInfoOrderByWithRelationInput | Prisma.personalInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.personalInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personalInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personalInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned personalInfos
    **/
    _count?: true | PersonalInfoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PersonalInfoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PersonalInfoMaxAggregateInputType;
};
export type GetPersonalInfoAggregateType<T extends PersonalInfoAggregateArgs> = {
    [P in keyof T & keyof AggregatePersonalInfo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePersonalInfo[P]> : Prisma.GetScalarType<T[P], AggregatePersonalInfo[P]>;
};
export type personalInfoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.personalInfoWhereInput;
    orderBy?: Prisma.personalInfoOrderByWithAggregationInput | Prisma.personalInfoOrderByWithAggregationInput[];
    by: Prisma.PersonalInfoScalarFieldEnum[] | Prisma.PersonalInfoScalarFieldEnum;
    having?: Prisma.personalInfoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PersonalInfoCountAggregateInputType | true;
    _min?: PersonalInfoMinAggregateInputType;
    _max?: PersonalInfoMaxAggregateInputType;
};
export type PersonalInfoGroupByOutputType = {
    id: string;
    cardId: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    _count: PersonalInfoCountAggregateOutputType | null;
    _min: PersonalInfoMinAggregateOutputType | null;
    _max: PersonalInfoMaxAggregateOutputType | null;
};
type GetPersonalInfoGroupByPayload<T extends personalInfoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PersonalInfoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PersonalInfoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PersonalInfoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PersonalInfoGroupByOutputType[P]>;
}>>;
export type personalInfoWhereInput = {
    AND?: Prisma.personalInfoWhereInput | Prisma.personalInfoWhereInput[];
    OR?: Prisma.personalInfoWhereInput[];
    NOT?: Prisma.personalInfoWhereInput | Prisma.personalInfoWhereInput[];
    id?: Prisma.StringFilter<"personalInfo"> | string;
    cardId?: Prisma.StringFilter<"personalInfo"> | string;
    firstName?: Prisma.StringFilter<"personalInfo"> | string;
    lastName?: Prisma.StringFilter<"personalInfo"> | string;
    jobTitle?: Prisma.StringFilter<"personalInfo"> | string;
    card?: Prisma.XOR<Prisma.CardScalarRelationFilter, Prisma.CardWhereInput>;
};
export type personalInfoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    jobTitle?: Prisma.SortOrder;
    card?: Prisma.CardOrderByWithRelationInput;
};
export type personalInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    cardId?: string;
    AND?: Prisma.personalInfoWhereInput | Prisma.personalInfoWhereInput[];
    OR?: Prisma.personalInfoWhereInput[];
    NOT?: Prisma.personalInfoWhereInput | Prisma.personalInfoWhereInput[];
    firstName?: Prisma.StringFilter<"personalInfo"> | string;
    lastName?: Prisma.StringFilter<"personalInfo"> | string;
    jobTitle?: Prisma.StringFilter<"personalInfo"> | string;
    card?: Prisma.XOR<Prisma.CardScalarRelationFilter, Prisma.CardWhereInput>;
}, "id" | "cardId">;
export type personalInfoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    jobTitle?: Prisma.SortOrder;
    _count?: Prisma.personalInfoCountOrderByAggregateInput;
    _max?: Prisma.personalInfoMaxOrderByAggregateInput;
    _min?: Prisma.personalInfoMinOrderByAggregateInput;
};
export type personalInfoScalarWhereWithAggregatesInput = {
    AND?: Prisma.personalInfoScalarWhereWithAggregatesInput | Prisma.personalInfoScalarWhereWithAggregatesInput[];
    OR?: Prisma.personalInfoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.personalInfoScalarWhereWithAggregatesInput | Prisma.personalInfoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"personalInfo"> | string;
    cardId?: Prisma.StringWithAggregatesFilter<"personalInfo"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"personalInfo"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"personalInfo"> | string;
    jobTitle?: Prisma.StringWithAggregatesFilter<"personalInfo"> | string;
};
export type personalInfoCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    card: Prisma.CardCreateNestedOneWithoutPersonalInfoInput;
};
export type personalInfoUncheckedCreateInput = {
    id?: string;
    cardId: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
};
export type personalInfoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    card?: Prisma.CardUpdateOneRequiredWithoutPersonalInfoNestedInput;
};
export type personalInfoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cardId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type personalInfoCreateManyInput = {
    id?: string;
    cardId: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
};
export type personalInfoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type personalInfoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cardId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PersonalInfoNullableScalarRelationFilter = {
    is?: Prisma.personalInfoWhereInput | null;
    isNot?: Prisma.personalInfoWhereInput | null;
};
export type personalInfoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    jobTitle?: Prisma.SortOrder;
};
export type personalInfoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    jobTitle?: Prisma.SortOrder;
};
export type personalInfoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cardId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    jobTitle?: Prisma.SortOrder;
};
export type personalInfoCreateNestedOneWithoutCardInput = {
    create?: Prisma.XOR<Prisma.personalInfoCreateWithoutCardInput, Prisma.personalInfoUncheckedCreateWithoutCardInput>;
    connectOrCreate?: Prisma.personalInfoCreateOrConnectWithoutCardInput;
    connect?: Prisma.personalInfoWhereUniqueInput;
};
export type personalInfoUncheckedCreateNestedOneWithoutCardInput = {
    create?: Prisma.XOR<Prisma.personalInfoCreateWithoutCardInput, Prisma.personalInfoUncheckedCreateWithoutCardInput>;
    connectOrCreate?: Prisma.personalInfoCreateOrConnectWithoutCardInput;
    connect?: Prisma.personalInfoWhereUniqueInput;
};
export type personalInfoUpdateOneWithoutCardNestedInput = {
    create?: Prisma.XOR<Prisma.personalInfoCreateWithoutCardInput, Prisma.personalInfoUncheckedCreateWithoutCardInput>;
    connectOrCreate?: Prisma.personalInfoCreateOrConnectWithoutCardInput;
    upsert?: Prisma.personalInfoUpsertWithoutCardInput;
    disconnect?: Prisma.personalInfoWhereInput | boolean;
    delete?: Prisma.personalInfoWhereInput | boolean;
    connect?: Prisma.personalInfoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.personalInfoUpdateToOneWithWhereWithoutCardInput, Prisma.personalInfoUpdateWithoutCardInput>, Prisma.personalInfoUncheckedUpdateWithoutCardInput>;
};
export type personalInfoUncheckedUpdateOneWithoutCardNestedInput = {
    create?: Prisma.XOR<Prisma.personalInfoCreateWithoutCardInput, Prisma.personalInfoUncheckedCreateWithoutCardInput>;
    connectOrCreate?: Prisma.personalInfoCreateOrConnectWithoutCardInput;
    upsert?: Prisma.personalInfoUpsertWithoutCardInput;
    disconnect?: Prisma.personalInfoWhereInput | boolean;
    delete?: Prisma.personalInfoWhereInput | boolean;
    connect?: Prisma.personalInfoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.personalInfoUpdateToOneWithWhereWithoutCardInput, Prisma.personalInfoUpdateWithoutCardInput>, Prisma.personalInfoUncheckedUpdateWithoutCardInput>;
};
export type personalInfoCreateWithoutCardInput = {
    id?: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
};
export type personalInfoUncheckedCreateWithoutCardInput = {
    id?: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
};
export type personalInfoCreateOrConnectWithoutCardInput = {
    where: Prisma.personalInfoWhereUniqueInput;
    create: Prisma.XOR<Prisma.personalInfoCreateWithoutCardInput, Prisma.personalInfoUncheckedCreateWithoutCardInput>;
};
export type personalInfoUpsertWithoutCardInput = {
    update: Prisma.XOR<Prisma.personalInfoUpdateWithoutCardInput, Prisma.personalInfoUncheckedUpdateWithoutCardInput>;
    create: Prisma.XOR<Prisma.personalInfoCreateWithoutCardInput, Prisma.personalInfoUncheckedCreateWithoutCardInput>;
    where?: Prisma.personalInfoWhereInput;
};
export type personalInfoUpdateToOneWithWhereWithoutCardInput = {
    where?: Prisma.personalInfoWhereInput;
    data: Prisma.XOR<Prisma.personalInfoUpdateWithoutCardInput, Prisma.personalInfoUncheckedUpdateWithoutCardInput>;
};
export type personalInfoUpdateWithoutCardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type personalInfoUncheckedUpdateWithoutCardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type personalInfoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cardId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    jobTitle?: boolean;
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["personalInfo"]>;
export type personalInfoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cardId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    jobTitle?: boolean;
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["personalInfo"]>;
export type personalInfoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cardId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    jobTitle?: boolean;
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["personalInfo"]>;
export type personalInfoSelectScalar = {
    id?: boolean;
    cardId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    jobTitle?: boolean;
};
export type personalInfoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cardId" | "firstName" | "lastName" | "jobTitle", ExtArgs["result"]["personalInfo"]>;
export type personalInfoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
};
export type personalInfoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
};
export type personalInfoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card?: boolean | Prisma.CardDefaultArgs<ExtArgs>;
};
export type $personalInfoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "personalInfo";
    objects: {
        card: Prisma.$CardPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cardId: string;
        firstName: string;
        lastName: string;
        jobTitle: string;
    }, ExtArgs["result"]["personalInfo"]>;
    composites: {};
};
export type personalInfoGetPayload<S extends boolean | null | undefined | personalInfoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$personalInfoPayload, S>;
export type personalInfoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<personalInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PersonalInfoCountAggregateInputType | true;
};
export interface personalInfoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['personalInfo'];
        meta: {
            name: 'personalInfo';
        };
    };
    /**
     * Find zero or one PersonalInfo that matches the filter.
     * @param {personalInfoFindUniqueArgs} args - Arguments to find a PersonalInfo
     * @example
     * // Get one PersonalInfo
     * const personalInfo = await prisma.personalInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personalInfoFindUniqueArgs>(args: Prisma.SelectSubset<T, personalInfoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__personalInfoClient<runtime.Types.Result.GetResult<Prisma.$personalInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PersonalInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personalInfoFindUniqueOrThrowArgs} args - Arguments to find a PersonalInfo
     * @example
     * // Get one PersonalInfo
     * const personalInfo = await prisma.personalInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personalInfoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, personalInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__personalInfoClient<runtime.Types.Result.GetResult<Prisma.$personalInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PersonalInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalInfoFindFirstArgs} args - Arguments to find a PersonalInfo
     * @example
     * // Get one PersonalInfo
     * const personalInfo = await prisma.personalInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personalInfoFindFirstArgs>(args?: Prisma.SelectSubset<T, personalInfoFindFirstArgs<ExtArgs>>): Prisma.Prisma__personalInfoClient<runtime.Types.Result.GetResult<Prisma.$personalInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PersonalInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalInfoFindFirstOrThrowArgs} args - Arguments to find a PersonalInfo
     * @example
     * // Get one PersonalInfo
     * const personalInfo = await prisma.personalInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personalInfoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, personalInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__personalInfoClient<runtime.Types.Result.GetResult<Prisma.$personalInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PersonalInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalInfos
     * const personalInfos = await prisma.personalInfo.findMany()
     *
     * // Get first 10 PersonalInfos
     * const personalInfos = await prisma.personalInfo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const personalInfoWithIdOnly = await prisma.personalInfo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends personalInfoFindManyArgs>(args?: Prisma.SelectSubset<T, personalInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personalInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PersonalInfo.
     * @param {personalInfoCreateArgs} args - Arguments to create a PersonalInfo.
     * @example
     * // Create one PersonalInfo
     * const PersonalInfo = await prisma.personalInfo.create({
     *   data: {
     *     // ... data to create a PersonalInfo
     *   }
     * })
     *
     */
    create<T extends personalInfoCreateArgs>(args: Prisma.SelectSubset<T, personalInfoCreateArgs<ExtArgs>>): Prisma.Prisma__personalInfoClient<runtime.Types.Result.GetResult<Prisma.$personalInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PersonalInfos.
     * @param {personalInfoCreateManyArgs} args - Arguments to create many PersonalInfos.
     * @example
     * // Create many PersonalInfos
     * const personalInfo = await prisma.personalInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends personalInfoCreateManyArgs>(args?: Prisma.SelectSubset<T, personalInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PersonalInfos and returns the data saved in the database.
     * @param {personalInfoCreateManyAndReturnArgs} args - Arguments to create many PersonalInfos.
     * @example
     * // Create many PersonalInfos
     * const personalInfo = await prisma.personalInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PersonalInfos and only return the `id`
     * const personalInfoWithIdOnly = await prisma.personalInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends personalInfoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, personalInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personalInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PersonalInfo.
     * @param {personalInfoDeleteArgs} args - Arguments to delete one PersonalInfo.
     * @example
     * // Delete one PersonalInfo
     * const PersonalInfo = await prisma.personalInfo.delete({
     *   where: {
     *     // ... filter to delete one PersonalInfo
     *   }
     * })
     *
     */
    delete<T extends personalInfoDeleteArgs>(args: Prisma.SelectSubset<T, personalInfoDeleteArgs<ExtArgs>>): Prisma.Prisma__personalInfoClient<runtime.Types.Result.GetResult<Prisma.$personalInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PersonalInfo.
     * @param {personalInfoUpdateArgs} args - Arguments to update one PersonalInfo.
     * @example
     * // Update one PersonalInfo
     * const personalInfo = await prisma.personalInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends personalInfoUpdateArgs>(args: Prisma.SelectSubset<T, personalInfoUpdateArgs<ExtArgs>>): Prisma.Prisma__personalInfoClient<runtime.Types.Result.GetResult<Prisma.$personalInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PersonalInfos.
     * @param {personalInfoDeleteManyArgs} args - Arguments to filter PersonalInfos to delete.
     * @example
     * // Delete a few PersonalInfos
     * const { count } = await prisma.personalInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends personalInfoDeleteManyArgs>(args?: Prisma.SelectSubset<T, personalInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PersonalInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalInfos
     * const personalInfo = await prisma.personalInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends personalInfoUpdateManyArgs>(args: Prisma.SelectSubset<T, personalInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PersonalInfos and returns the data updated in the database.
     * @param {personalInfoUpdateManyAndReturnArgs} args - Arguments to update many PersonalInfos.
     * @example
     * // Update many PersonalInfos
     * const personalInfo = await prisma.personalInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PersonalInfos and only return the `id`
     * const personalInfoWithIdOnly = await prisma.personalInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends personalInfoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, personalInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personalInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PersonalInfo.
     * @param {personalInfoUpsertArgs} args - Arguments to update or create a PersonalInfo.
     * @example
     * // Update or create a PersonalInfo
     * const personalInfo = await prisma.personalInfo.upsert({
     *   create: {
     *     // ... data to create a PersonalInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalInfo we want to update
     *   }
     * })
     */
    upsert<T extends personalInfoUpsertArgs>(args: Prisma.SelectSubset<T, personalInfoUpsertArgs<ExtArgs>>): Prisma.Prisma__personalInfoClient<runtime.Types.Result.GetResult<Prisma.$personalInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PersonalInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalInfoCountArgs} args - Arguments to filter PersonalInfos to count.
     * @example
     * // Count the number of PersonalInfos
     * const count = await prisma.personalInfo.count({
     *   where: {
     *     // ... the filter for the PersonalInfos we want to count
     *   }
     * })
    **/
    count<T extends personalInfoCountArgs>(args?: Prisma.Subset<T, personalInfoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PersonalInfoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PersonalInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonalInfoAggregateArgs>(args: Prisma.Subset<T, PersonalInfoAggregateArgs>): Prisma.PrismaPromise<GetPersonalInfoAggregateType<T>>;
    /**
     * Group by PersonalInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalInfoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends personalInfoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: personalInfoGroupByArgs['orderBy'];
    } : {
        orderBy?: personalInfoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, personalInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the personalInfo model
     */
    readonly fields: personalInfoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for personalInfo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__personalInfoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the personalInfo model
 */
export interface personalInfoFieldRefs {
    readonly id: Prisma.FieldRef<"personalInfo", 'String'>;
    readonly cardId: Prisma.FieldRef<"personalInfo", 'String'>;
    readonly firstName: Prisma.FieldRef<"personalInfo", 'String'>;
    readonly lastName: Prisma.FieldRef<"personalInfo", 'String'>;
    readonly jobTitle: Prisma.FieldRef<"personalInfo", 'String'>;
}
/**
 * personalInfo findUnique
 */
export type personalInfoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoInclude<ExtArgs> | null;
    /**
     * Filter, which personalInfo to fetch.
     */
    where: Prisma.personalInfoWhereUniqueInput;
};
/**
 * personalInfo findUniqueOrThrow
 */
export type personalInfoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoInclude<ExtArgs> | null;
    /**
     * Filter, which personalInfo to fetch.
     */
    where: Prisma.personalInfoWhereUniqueInput;
};
/**
 * personalInfo findFirst
 */
export type personalInfoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoInclude<ExtArgs> | null;
    /**
     * Filter, which personalInfo to fetch.
     */
    where?: Prisma.personalInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personalInfos to fetch.
     */
    orderBy?: Prisma.personalInfoOrderByWithRelationInput | Prisma.personalInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for personalInfos.
     */
    cursor?: Prisma.personalInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personalInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personalInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personalInfos.
     */
    distinct?: Prisma.PersonalInfoScalarFieldEnum | Prisma.PersonalInfoScalarFieldEnum[];
};
/**
 * personalInfo findFirstOrThrow
 */
export type personalInfoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoInclude<ExtArgs> | null;
    /**
     * Filter, which personalInfo to fetch.
     */
    where?: Prisma.personalInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personalInfos to fetch.
     */
    orderBy?: Prisma.personalInfoOrderByWithRelationInput | Prisma.personalInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for personalInfos.
     */
    cursor?: Prisma.personalInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personalInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personalInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personalInfos.
     */
    distinct?: Prisma.PersonalInfoScalarFieldEnum | Prisma.PersonalInfoScalarFieldEnum[];
};
/**
 * personalInfo findMany
 */
export type personalInfoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoInclude<ExtArgs> | null;
    /**
     * Filter, which personalInfos to fetch.
     */
    where?: Prisma.personalInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personalInfos to fetch.
     */
    orderBy?: Prisma.personalInfoOrderByWithRelationInput | Prisma.personalInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing personalInfos.
     */
    cursor?: Prisma.personalInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personalInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personalInfos.
     */
    skip?: number;
    distinct?: Prisma.PersonalInfoScalarFieldEnum | Prisma.PersonalInfoScalarFieldEnum[];
};
/**
 * personalInfo create
 */
export type personalInfoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoInclude<ExtArgs> | null;
    /**
     * The data needed to create a personalInfo.
     */
    data: Prisma.XOR<Prisma.personalInfoCreateInput, Prisma.personalInfoUncheckedCreateInput>;
};
/**
 * personalInfo createMany
 */
export type personalInfoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many personalInfos.
     */
    data: Prisma.personalInfoCreateManyInput | Prisma.personalInfoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * personalInfo createManyAndReturn
 */
export type personalInfoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * The data used to create many personalInfos.
     */
    data: Prisma.personalInfoCreateManyInput | Prisma.personalInfoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * personalInfo update
 */
export type personalInfoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoInclude<ExtArgs> | null;
    /**
     * The data needed to update a personalInfo.
     */
    data: Prisma.XOR<Prisma.personalInfoUpdateInput, Prisma.personalInfoUncheckedUpdateInput>;
    /**
     * Choose, which personalInfo to update.
     */
    where: Prisma.personalInfoWhereUniqueInput;
};
/**
 * personalInfo updateMany
 */
export type personalInfoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update personalInfos.
     */
    data: Prisma.XOR<Prisma.personalInfoUpdateManyMutationInput, Prisma.personalInfoUncheckedUpdateManyInput>;
    /**
     * Filter which personalInfos to update
     */
    where?: Prisma.personalInfoWhereInput;
    /**
     * Limit how many personalInfos to update.
     */
    limit?: number;
};
/**
 * personalInfo updateManyAndReturn
 */
export type personalInfoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * The data used to update personalInfos.
     */
    data: Prisma.XOR<Prisma.personalInfoUpdateManyMutationInput, Prisma.personalInfoUncheckedUpdateManyInput>;
    /**
     * Filter which personalInfos to update
     */
    where?: Prisma.personalInfoWhereInput;
    /**
     * Limit how many personalInfos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * personalInfo upsert
 */
export type personalInfoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoInclude<ExtArgs> | null;
    /**
     * The filter to search for the personalInfo to update in case it exists.
     */
    where: Prisma.personalInfoWhereUniqueInput;
    /**
     * In case the personalInfo found by the `where` argument doesn't exist, create a new personalInfo with this data.
     */
    create: Prisma.XOR<Prisma.personalInfoCreateInput, Prisma.personalInfoUncheckedCreateInput>;
    /**
     * In case the personalInfo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.personalInfoUpdateInput, Prisma.personalInfoUncheckedUpdateInput>;
};
/**
 * personalInfo delete
 */
export type personalInfoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoInclude<ExtArgs> | null;
    /**
     * Filter which personalInfo to delete.
     */
    where: Prisma.personalInfoWhereUniqueInput;
};
/**
 * personalInfo deleteMany
 */
export type personalInfoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which personalInfos to delete
     */
    where?: Prisma.personalInfoWhereInput;
    /**
     * Limit how many personalInfos to delete.
     */
    limit?: number;
};
/**
 * personalInfo without action
 */
export type personalInfoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalInfo
     */
    select?: Prisma.personalInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personalInfo
     */
    omit?: Prisma.personalInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personalInfoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=personalInfo.d.ts.map