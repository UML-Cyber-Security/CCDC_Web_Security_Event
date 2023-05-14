import "./style.css";
import { UsersTable } from "../../components/About/MemberTable";
import Description from "../../components/About/Description";

import {Title} from "@mantine/core";
function About() {
  return (
    <div className="aboutPageStyle">
      <Title order={1} align="center" my="lg">About us</Title>
      <Description/>
      <Title order={1} align="center" my="lg">Meet our team!</Title>
      <UsersTable/>
    </div>
  );
}

export default About;
