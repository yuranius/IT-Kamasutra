import React from "react";
import Preloader from "../Common/Preloader/Preloader";

//! HOC для ленивой загрузки компонентов из main - компоненты

export const withSuspense = (Components) => {
	return (props) => {
		return (
			<React.Suspense fallback={<Preloader />}>
				<Components {...props} />
			</React.Suspense>
		);
	};
};
