import AuthContext from "../context/AuthContext";
import { useEffect, useContext } from "react";
import Router from "next/router";

export function useAuthSession() {
	const [auth, setAuth] = useContext(AuthContext);
	const [user, setUser] = useState(auth.user);

	useEffect(() => {
		if (!user) Router.push("/login");
	}, [user]);
	return user;
}
