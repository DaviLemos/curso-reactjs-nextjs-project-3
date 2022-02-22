import P from 'prop-types';
import { loadPages } from '../api/load-pages';
import { mapData } from '../api/map-data';
import config from '../config';
import Home from '../templates/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}
// getServerSideProps
export const getStaticProps = async () => {
  // const raw = await fetch(config.url + config.defaultSlug);
  // const json = await raw.json();
  // const data = mapData(json);
  let data = null;
  try {
    data = await loadPages('landing-page');
  } catch (e) {
    console.log(e);
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

Index.propsTypes = {
  data: P.array,
};
