class File extends FileSystemItem {

    public File(String name) {
        super(name);
    }

    @Override
    public void display(String indent) {
        System.out.println(indent + "- File: " + name);
    }
}