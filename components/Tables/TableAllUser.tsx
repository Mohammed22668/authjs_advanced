
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Link from "next/link"
import { Button } from "../ui/button"


const TableAllUsers = ({allusers}: any) => {
    const users = JSON.parse(allusers)
    return (
        <div className="container">
            <Link href="/settings">
            <Button>
                Back to settings
            </Button>
            </Link>
         <Table>
  <TableCaption>A list of your Users</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>Username</TableHead>
      <TableHead>Email</TableHead>
      <TableHead className="text-right">Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {users.map((user:any) => (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell className="text-right">{user.role}</TableCell>
    </TableRow>
     ))}
  </TableBody>
</Table>

        </div>
    )
}

export default TableAllUsers;
