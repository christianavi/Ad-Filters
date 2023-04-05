import os

def compile_filters():
    filter_files = [os.path.join('filters', f) for f in os.listdir('filters') if f.endswith('.txt')]

    compiled_filters = ''

    for file in filter_files:
        with open(file, 'r', encoding='utf-8') as f:
            compiled_filters += f.read() + '\n'

    with open('filters.txt', 'w', encoding='utf-8') as f:
        f.write(compiled_filters)

if __name__ == '__main__':
    compile_filters()