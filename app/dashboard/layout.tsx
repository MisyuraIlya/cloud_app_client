import { Header } from "@/components/Header/Header"
import styles from '../../styles/Home.module.scss';
import SideBar from "@/components/SideBar/SideBar";
import { FileActions } from "@/components/FileActions/FileActions";
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main className={styles.dashboardContainer}>
            <div className={styles.sidebar}>
                <SideBar/>
            </div>
            <div className={styles.main}>
                <div className={styles.layout}>
                    <div className="container">
                        {children}
                    </div>
                </div>
            </div>
        </main>
        </>

    )
}