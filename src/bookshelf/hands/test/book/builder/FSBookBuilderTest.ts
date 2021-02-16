import { FileSystemBookBuilder } from '../../../book/builder/FileSystemBookBuilder';

export class FSBookBuilderTest extends FileSystemBookBuilder {
    protected readonly PATH = this.ROOT + "src/bookshelf/books/data/original/";
    
}