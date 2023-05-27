import { Header } from "@/components/Header/Header"
import styles from '../../styles/Home.module.scss';
import SideBar from "@/components/SideBar/SideBar";
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
            <div className="container">
                {children}
            </div>
        </main>
        </>

    )
}