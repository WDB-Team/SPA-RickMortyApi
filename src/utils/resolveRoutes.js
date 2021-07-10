const resolveRoutes = (route) => {
    if(route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    } else {
        return `/${route}`;
    }
};

export default resolveRoutes;