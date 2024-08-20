import CategoryMenu from './categoryMenu';
import Layout from '@/components/layout';
import RecordsListTable from './recordListTable';

const Record = () => {
  return (
    <Layout ChildStyle={true}>
      <CategoryMenu />
      <RecordsListTable />
    </Layout>
  );
};

export default Record;