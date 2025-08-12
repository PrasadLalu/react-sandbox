import { useAppSelector } from "@/features/hooks";
import { NavigationMenu } from "radix-ui";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const products = useAppSelector(state => state.cart.products);

  return (
    <NavigationMenu.Root className="flex justify-between items-center px-6 py-3 border-b">
      {/* Left side - Dashboard */}
      <NavigationMenu.List className="flex items-center gap-6">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild
            className="text-lg font-semibold hover:text-blue-600">
            <Link to="/">Products</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      {/* Right side - Login */}
      <NavigationMenu.List className="flex items-center gap-4">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            asChild
            className="text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
          >
            <Link to="/cart">
              <FaCartShopping />
              <span>{products.length}</span> Cart
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Navbar;
