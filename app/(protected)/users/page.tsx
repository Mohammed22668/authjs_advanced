import { auth } from "@/auth";
import TableAllUsers from "@/components/Tables/TableAllUser";
import { getAllUsers, getUsersByFilters } from "@/lib/actions/user.action";



const page = async () => {
    const session = await auth();

    if (session?.user.role !== "admin") {

        const users = await getUsersByFilters(session?.user?.role as string)
        return (
            <div>
                <TableAllUsers allusers={JSON.stringify(users)} />
            </div>
        )
    } else {

        const users = await getAllUsers();
        return (
            <div>
                <TableAllUsers allusers={JSON.stringify(users)} />
            </div>
        )
    }



}

export default page;
