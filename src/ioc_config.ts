import "reflect-metadata";
import {Container} from "inversify";
import {Bar} from "./Bar";
import SERVICE_IDENTIFIER from "./identifiers";

let container = new Container();
container.bind<Bar>(SERVICE_IDENTIFIER.BAR).toConstantValue(new Bar("bar1256"));

export default container;