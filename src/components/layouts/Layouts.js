//import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      {/* <MainNavigation /> */}
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;

/* Layout is used in App.js */
