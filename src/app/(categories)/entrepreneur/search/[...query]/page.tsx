import IndicatorPage from "../../../../../components/(pages)/indicatorPage/indicatorPage.component";

const MarketingSearchPage = async ({
  params,
}: {
  params: { query: string[] };
}) => {
  const query = params.query[0]!.replace(/%20/g, " ")
    .replace(/SLASH/g, "/")
    .replace(/%2C/g, ",");

  return (
    // @ts-expect-error server component
    <IndicatorPage
      chunkSize={10}
      results={query}
      page={params.query[1]!}
      query={params.query[0]}
      color="var(--entrepreneurGrey)"
      searchUrl="entrepreneur/search"
      baseUrl={`entrepreneur/search/${query.replace(/\//g, "SLASH")}`}
      category="ENTREPRENEUR"
    />
  );
};

export default MarketingSearchPage;
