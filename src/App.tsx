import {Admin, Resource, ShowGuesser} from 'react-admin';
import {dataProvider} from './dataProvider';
import {UserList} from "./components/UserList";
import {PostList} from "./components/PostList";
import {PostEdit} from "./components/PostEdit";
import PostCreate from "./components/PostCreate";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

export const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      recordRepresentation="name"
      show={ShowGuesser}
      icon={UserIcon}
    />
  </Admin>
);

    