import { useStore } from "../../store/store";
import { GET_DISPLAY_HEIGHT } from "../../store/type.json";

export default function Friends() {
   const [state, dispatch] = useStore(false);
   dispatch(GET_DISPLAY_HEIGHT)
   const [height, top] = [state.height, state.top];

   return (
      <div role="friends" className="relative w-screen min-h-fit flex">
         <aside
            style={{ top: top, maxHeight: height }}
            className="sticky bg-black h-fit pt-4 pr-20 flex flex-col basis-1/4 scrollbar overflow-hidden hover:overflow-y-auto"
         >

         </aside>
      </div>
   );
}
