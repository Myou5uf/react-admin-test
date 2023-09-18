import {useRecordContext} from "react-admin";

const MyTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export default MyTitle;