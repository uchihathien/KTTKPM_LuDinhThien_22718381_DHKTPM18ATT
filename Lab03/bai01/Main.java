public class Main {
    public static void main(String[] args) {
        Folder root = new Folder("Root");

        File file1 = new File("file1.txt");
        File file2 = new File("file2.txt");

        Folder subFolder = new Folder("SubFolder");
        subFolder.add(new File("file3.txt"));

        root.add(file1);
        root.add(file2);
        root.add(subFolder);

        root.display("");
    }
}