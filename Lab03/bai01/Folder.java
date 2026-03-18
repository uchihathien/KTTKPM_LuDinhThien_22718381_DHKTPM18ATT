import java.util.ArrayList;
import java.util.List;

class Folder extends FileSystemItem {
    private List<FileSystemItem> children = new ArrayList<>();

    public Folder(String name) {
        super(name);
    }

    public void add(FileSystemItem item) {
        children.add(item);
    }

    public void remove(FileSystemItem item) {
        children.remove(item);
    }

    @Override
    public void display(String indent) {
        System.out.println(indent + "+ Folder: " + name);
        for (FileSystemItem item : children) {
            item.display(indent + "   ");
        }
    }
}