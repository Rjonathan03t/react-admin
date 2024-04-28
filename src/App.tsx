import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import {PostCreate} from '../src/postCreate'
import { dataProvider } from "./dataProvider";

export const App = () =>
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} edit={EditGuesser} create={PostCreate}/>
    <Resource name="users" list={ListGuesser} />
    <Resource name="users" list={ListGuesser} recordRepresentation="name" />
  </Admin>;
