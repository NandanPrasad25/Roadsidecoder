import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div>
        <Header />
        {/* Loading */}
        {isLoading && <div>Loading...</div>}
        {/* Pages */}
        <Outlet />
    </div>
  )
}

export default AppLayout