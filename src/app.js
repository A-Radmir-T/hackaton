import './styles.css'
import {ContextMenu} from "@/menu";
import {BackgroundModule} from "@/modules/background.module";


const modules = [BackgroundModule, clickCounterModule, CustomMessage]

const contextMenu = new ContextMenu('#menu', modules)

contextMenu.init()