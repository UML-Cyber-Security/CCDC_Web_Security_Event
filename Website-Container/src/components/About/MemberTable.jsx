import React from 'react';
import {
 Avatar,
 Badge,
 Table,
 Group,
 Text,
 Anchor,
 ScrollArea,
 useMantineTheme,
} from '@mantine/core';

const jobColors = {
 'bait master': 'cyan',
 'tackle specialist': 'pink',
 'fishing guide': 'green',
 'sales manager': 'red',
 'IT coordinator': 'orange'
};

export function UsersTable() {
 const theme = useMantineTheme();

 const data = [
 {
 img: "",
 name: "John Smith",
 title: "Bait Master",
 email: 'john@baitandtacklebazaar.com',
 description: "Expert in all things bait-related"
 },
 {
 img: "",
 name: "Jane Doe",
 title: "Tackle Specialist",
 email: 'jane@baitandtacklebazaar.com',
 description: "Knowledgeable about all types of fishing tackle"
 },
 {
 img: "",
 name: "Bob Johnson",
 title: "Fishing Guide",
 email: 'bob@baitandtacklebazaar.com',
 description: "Experienced guide for all your fishing adventures"
 },
 {
 img: "",
 name: "Samantha Williams",
 title: "Sales Manager",
 email: 'samantha@baitandtacklebazaar.com',
 description: "In charge of sales and customer service"
 },
 {
 img: "",
 name: "Tom Brown",
 title: "IT Coordinator",
 email: 'tom@baitandtacklebazaar.com',
 description: "Manages the web app"
 }
 ]

 const rows = data.map((item) => (
 <tr>
 <td>
 <Group spacing="sm">
 <Avatar size={30} src={item.img} radius={30} />
 <Text size="sm" weight={500}>
 {item.name}
 </Text>
 </Group>
 </td>
 <td>
 <Badge
 color={jobColors[item.title.toLowerCase()]}
 variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
 >
 {item.title}
 </Badge>
 </td>
 <td>
 <Anchor size="sm" href="#" onClick={(event) => event.preventDefault()}>
 {item.email}
 </Anchor>
 </td>
 <td>
 <Text size="sm" color="gray">
 {item.description}
 </Text>
 </td>
 </tr>
 ));

 return (
 <ScrollArea >
 <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
 <thead>
 <tr>
 <th>Member</th>
 <th>Position</th>
 <th>Email</th>
 <th>Short Description</th>
 </tr>
 </thead>
 <tbody>
 {rows}
 </tbody>
 </Table>
 </ScrollArea>
 );
}