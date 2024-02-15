import styles from "@/app/ui/dashboard/users/users.module.css"
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";

export default function UsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  John
                </div>
              </td>
              <td>test@gmail.com</td>
              <td>2024-01-01</td>
              <td>Admin</td>
              <td>active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
        </tbody>
      </table>    
    </div>
  );
}