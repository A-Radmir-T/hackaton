import './styles.css'
import {ContextMenu} from "@/menu";

const modules = []

const contextMenu = new ContextMenu('#menu', modules)

contextMenu.init()